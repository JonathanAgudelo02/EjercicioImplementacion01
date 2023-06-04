"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accidente = void 0;
class Accidente {
    constructor(fecha, descripcion, severidad) {
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.severidad = severidad;
        this.involucrados = [];
    }
}
exports.Accidente = Accidente;
