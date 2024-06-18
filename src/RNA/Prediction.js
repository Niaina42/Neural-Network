import Architecture from "./Architecture";

class Prediction {
    constructor(apprentissage) {
        this.R = apprentissage.architecture;
        this.G = apprentissage.gradient;
    }

    unPas(pas, debutP = 0) {
        const architecture = new Architecture();
        const X = architecture.genererValeur(pas + this.R[0] + debutP)[0];
        const [pred, S] = this.G.predictionUnPas(X, pas, debutP);
        return [pred, X.slice(this.R[0] + debutP), S];
    }

    plusieursPas(pas, debutP = 0) {
        const architecture = new Architecture();
        const X = architecture.genererValeur(pas + this.R[0] + debutP)[0];
        const [pred, S] = this.G.predictionPlusieursPas(X, pas, debutP);
        return [pred, X.slice(debutP + this.R[0]), S];
    }
}

export default Prediction;