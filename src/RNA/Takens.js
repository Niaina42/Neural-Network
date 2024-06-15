import * as math from 'mathjs';

class Takens {
    constructor(x = []) {
        this.X = x;
        this.teta = [];
        this.E = [];
        this.coucheEntree = 0;
        this.valpropre = [];
        this.vectpropre = [];
        this.lancer();
    }

    matriceCovariance() {
        this.teta = this.X.map(x => this.X.map(y => x * y));
    }

    nbrCoucheEntree() {
        let cpt = 0;
        for (let i = 1; i < this.E.length; i++) {
            if (Math.abs(this.E[i - 1] - this.E[i]) < 0.000001) {
                cpt = i;
                break;
            }
        }
        this.coucheEntree = cpt;
    }

    trieDecroissante(values) {
        values.sort((a, b) => b - a);
        return [...values];
    }

    erreurApproximation() {
        this.E = this.valpropre.map(y => Math.sqrt(Math.abs(y + 1)));
    }

    lancer() {
        this.matriceCovariance();
        // Calcule des valeurs propres et vecteur propres
        const { values, eigenvectors } = math.eigs(this.teta);
        
        this.valpropre = this.trieDecroissante(values);
        this.vectpropre = eigenvectors;
        this.erreurApproximation();
        this.nbrCoucheEntree();
    }
}

export default Takens