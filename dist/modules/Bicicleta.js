"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bicicleta = void 0;
const Vehiculo_1 = require("./Vehiculo");
class Bicicleta extends Vehiculo_1.Vehiculo {
    constructor(marca, modelo, color, ruedas, tipo, luces) {
        super(marca, modelo, color, ruedas);
        this.tipo = tipo;
        this.luces = luces;
    }
    get getTipo() {
        return this.tipo;
    }
    get getLuces() {
        return this.luces;
    }
}
exports.Bicicleta = Bicicleta;
