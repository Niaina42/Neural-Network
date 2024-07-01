import * as math from 'mathjs';

class Gradient {
  constructor(R, N, prototype, X = []) {
    this.W = [];
    this.initialW = [];
    this.M = R.length;
    this.R = R;
    this.N = N;
    this.valattendue = X.slice(R[0]);
    this.valpredite = [];
    this.V = [];
    this.epoch = 1000;
    this.NMSE = [];
    this.P = prototype.length;
    this.delta = [];

    // Start the gradient descent learning process
    this.training(prototype); 
  }

  // Activation function (sigmoid)
  Gx(x) {
    return 1 / (1 + math.exp(-x));
  }

  // Derivative of the activation function
  gx(x) {
    return math.exp(-x) / ((1 + math.exp(-x)) ** 2);
  }

  // Calculate h(m, i)
  h(m, i) {
    let som = 0;
    for (let j = 0; j < this.W[m][i].length; j++) {
      som += this.W[m][i][j] * this.V[m - 1][j];
    }
    return som;
  }

  toString() { // Using toString() for representation
    let rpr = 'Valeur du poids apres la mise a jour:\n';
    for (let j = 0; j < this.W.length; j++) {
      rpr += `<m:${j + 1}>\n`;
      for (let x = 0; x < this.W[j].length; x++) {
        for (let y = 0; y < this.W[j][x].length; y++) {
          rpr += `W<{${x + 1},${y + 1}}>:${this.W[j][x][y].toFixed(8)}\n`;
        }
      }
      rpr += '\n';
    }
    return rpr;
  }

  step_1() {
    // Initialize weights with random values
    if (this.W.length === 0) {
      for (let l = 1; l < this.M; l++) {
        let w = [];
        for (let i = 0; i < this.R[l]; i++) {
          w.push(Array.from({ length: this.R[l - 1] }, () => Math.random()));
        }
        this.W.push(w);
        this.initialW.push(w)
      }
      // Insert a copy at the beginning
      this.W.unshift(this.W[0]); 
      this.initialW.unshift(this.initialW[0]);
    }
  }

  step_2(s) {
    // Initialize the first layer
    this.V = [s.slice()]; 
  }

  step_3() {
    // Propagate the signal forward through the network
    for (let m = 1; m < this.M; m++) {
      this.V.push(Array.from({ length: this.R[m] }, (_, i) => this.Gx(this.h(m, i))));
    }
    return this.V[this.V.length - 1][0];
  }

  step_4(s) {
    // Calculate delta D[M, i] for the output layer
    this.delta = [
      Array.from({ length: this.R[this.M - 1] }, (_, i) =>
        this.gx(this.h(this.M - 1, i)) * (s[i] - this.V[this.M - 1][i])
      ),
    ];
  }

  step_5() {
    // Calculate delta for the previous layers
    for (let m = this.M - 1; m > 1; m--) {
      let deltaLayer = [];
      for (let i = 0; i < this.R[m - 1]; i++) {
        let sumDelta = 0;
        for (let j = 0; j < this.R[m]; j++) {
          sumDelta += this.W[m][j][i] * this.delta[0][j];
        }
        deltaLayer.push(this.gx(this.h(m - 1, i)) * sumDelta);
      }
      this.delta.unshift(deltaLayer);
    }
  }

  step_6() {
    // Update the weights
    let w = [];
    for (let m = 0; m < this.delta.length; m++) {
      let wLayer = [];
      for (let i = 0; i < this.R[m + 1]; i++) {
        let wNeuron = [];
        for (let j = 0; j < this.R[m]; j++) {
          wNeuron.push(
            this.W[m + 1][i][j] + this.N * this.delta[m][i] * this.V[m][j]
          );
        }
        wLayer.push(wNeuron);
      }
      w.push(wLayer);
    }
    w.unshift(w[0]); 
    this.W = w;
  }

  calcul_NMSE() {
    let res = 0;
    for (let i = 0; i < this.valattendue.length; i++) {
      res += (this.valattendue[i] - this.valpredite[i]) ** 2;
    }
    return (1 / this.P * this.__variance(this.valattendue)) * res;
  }

  __variance(x) {
    let n = x.length;
    let moyenne = 0;
    let res = 0;
    for (let i = 0; i < n; i++) {
      moyenne += x[i];
      res += x[i] ** 2;
    }
    if (n) {
      moyenne /= n;
      res /= n;
    }
    return res - moyenne ** 2;
  }

  training(S) {
    this.step_1();
    for (let i = 0; i < this.epoch; i++) {
      this.valpredite = [];
      for (let p of S) {
        this.step_2(p);
        this.valpredite.push(this.step_3());
        this.step_4(p);
        this.step_5();
        this.step_6();
      }
      this.NMSE.push(this.calcul_NMSE());
    }
  }

  prediction(S) {
    if (this.W.length === 0) {
      return ['Erreur: veuillez faire une apprentissage dabord'];
    }
    let r = [];
    for (let p of S) {
      this.step_2(p);
      r.push(this.step_3());
    }
    return r;
  }

  prediction_plusieurpas(X, pas, debut) {
    let ce = this.R[0];
    let S = [];
    let prediction = [];
    for (let i = 0; i < pas; i++) {
      let prototype = prediction.slice(-ce).reverse(); 
      if (debut + ce - i > 0) {
        prediction.push(
          this.prediction([
            [...prototype, ...X.slice(debut, debut + ce - i)],
          ])[0]
        );
        S.push([...prototype, ...X.slice(debut, debut + ce - i)]);
      } else {
        prediction.push(this.prediction([prototype])[0]);
        S.push(prototype);
      }
    }
    return [prediction, S];
  }

  prediction_unpas(X, pas, debut) {
    let ce = this.R[0];
    let S = [];
    let prediction = [];
    for (let i = 0; i < pas; i++) {
      S.push(X.slice(i + debut, debut + ce + i));
    }
    prediction = this.prediction(S);
    return [prediction, S];
  }
}

export default Gradient;
