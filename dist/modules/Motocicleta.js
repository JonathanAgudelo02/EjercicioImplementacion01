"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motocicleta = void 0;
const Motorizado_1 = require("./Motorizado");
class Motocicleta extends Motorizado_1.Motorizado {
    constructor(marca, modelo, color, ruedas, placa, velocidadMaxima, cilindraje) {
        super(marca, modelo, color, ruedas, placa, velocidadMaxima);
        this.cilindraje = cilindraje;
    }
    get getCilindraje() {
        return this.cilindraje;
    }
}
exports.Motocicleta = Motocicleta;
