"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
class Vehiculo {
    constructor(marca, modelo, color, ruedas) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.ruedas = ruedas;
        this.propietario = null;
        this.reportes = [];
    }
}
exports.Vehiculo = Vehiculo;
