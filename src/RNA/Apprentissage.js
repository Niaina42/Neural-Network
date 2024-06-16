import Gradient from "./Gradient";

class Apprentissage {
    constructor(N, architecture) {
      this.P = 50;
      this.architecture = architecture.networkArchitecture();
      let X = architecture.generateValues(this.P + this.architecture[0])[0];
      this.prototype = this._set_prototype(X, this.architecture[0]);
      this.gradient = new Gradient(this.architecture, N, this.prototype, X);
    }
  
    _set_prototype(X, ce) {
      let s = [];
      for (let i = 0; i < this.P; i++) {
        s.push(X.slice(i, ce + i));
      }
      return s;
    }
  
    get_NMSE() {
      return this.gradient.NMSE;
    }
  
    get_poids() {
      return this.gradient.W;
    }
}

export default Apprentissage