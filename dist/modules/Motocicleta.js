"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motocicleta = void 0;
const Motorizado_1 = require("./Motorizado");
class Motocicleta extends Motorizado_1.Motorizado {
    constructor(placa, velocidadMaxima, cilindraje) {
        super(placa, velocidadMaxima);
        this.cilindraje = cilindraje;
    }
}
exports.Motocicleta = Motocicleta;
