import Takens from "./Takens";

class Architecture {
    constructor() {
        this.A = 1.4;
        this.B = 0.3;
    }

    networkArchitecture() {
        this.generateValues(500);
        let tak = new Takens(this.X);
        this.error = tak.E;
        this.valpropre = tak.valpropre;
        let coucheEntree = parseInt(tak.coucheEntree);
        let coucheCachee = 5;
        let coucheSortie = 1;

        return [coucheEntree, coucheCachee, coucheSortie];
    }

    generateValues(n) {
        this.X = [0];
        this.Y = [0];
        for (let i = 1; i < n; i++) {
            this.X.push(this.Y[i - 1] + 1 - this.A * (this.X[i - 1] ** 2));
            this.Y.push(this.B * this.X[i - 1]);
        }

        return [this.X, this.Y];
    }
}

export default Architecture;