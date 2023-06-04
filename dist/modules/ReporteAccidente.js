"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReporteAccidente = void 0;
const Accidente_1 = require("./Accidente");
class ReporteAccidente {
    constructor(involucrados) {
        this.reportes = [];
        this.involucrados = involucrados;
    }
    agregarReporte(fecha, descripcion, severidad) {
        const nuevoReporte = new Accidente_1.Accidente(fecha, descripcion, severidad);
        this.reportes.push(nuevoReporte);
    }
}
exports.ReporteAccidente = ReporteAccidente;
