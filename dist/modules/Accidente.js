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
    get getFecha() {
        return this.fecha;
    }
    get getDescripcion() {
        return this.descripcion;
    }
    get getSeveridad() {
        return this.severidad;
    }
    get getInvolucrados() {
        return this.involucrados;
    }
}
exports.Accidente = Accidente;
