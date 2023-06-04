"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
// Modulo: Vehiculo
class Vehiculo {
    constructor(marca, modelo, color, ruedas) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.ruedas = ruedas;
    }
    get getMarca() {
        return this.marca;
    }
    get getModelo() {
        return this.modelo;
    }
    get getColor() {
        return this.color;
    }
    get getRuedas() {
        return this.ruedas;
    }
}
exports.Vehiculo = Vehiculo;
