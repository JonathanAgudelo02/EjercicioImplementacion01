"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motorizado = void 0;
const Vehiculo_1 = require("./Vehiculo");
class Motorizado extends Vehiculo_1.Vehiculo {
    constructor(marca, modelo, color, ruedas, placa, velocidadMaxima) {
        super(marca, modelo, color, ruedas);
        this.placa = placa;
        this.velocidadMaxima = velocidadMaxima;
    }
    get getPlaca() {
        return this.placa;
    }
    get getVelMax() {
        return this.velocidadMaxima;
    }
}
exports.Motorizado = Motorizado;
