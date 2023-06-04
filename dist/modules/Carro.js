"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const Motorizado_1 = require("./Motorizado");
class Carro extends Motorizado_1.Motorizado {
    constructor(marca, modelo, color, ruedas, placa, velocidadMaxima, asientos) {
        super(marca, modelo, color, ruedas, placa, velocidadMaxima);
        this.asientos = asientos;
    }
    get getAsientos() {
        return this.asientos;
    }
}
exports.Carro = Carro;
