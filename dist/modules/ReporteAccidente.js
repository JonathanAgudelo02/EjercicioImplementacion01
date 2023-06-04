"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReporteAccidente = void 0;
class ReporteAccidente {
    constructor(involucrados, reportes) {
        this.involucrados = involucrados;
        this.reportes = reportes;
    }
    get getInvolucrados() {
        return this.involucrados;
    }
    get getReportes() {
        return this.reportes;
    }
}
exports.ReporteAccidente = ReporteAccidente;
