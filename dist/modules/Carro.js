"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const Motorizado_1 = require("./Motorizado");
class Carro extends Motorizado_1.Motorizado {
    constructor(placa, velocidadMaxima, asientos) {
        super(placa, velocidadMaxima);
        this.asientos = asientos;
    }
}
exports.Carro = Carro;
