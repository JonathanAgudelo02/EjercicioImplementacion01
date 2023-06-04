"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenciaConduccion = void 0;
class LicenciaConduccion {
    constructor(tipoLicencia, fechaExpedicion, vigencia) {
        this.tipoLicencia = tipoLicencia;
        this.fechaExpedicion = fechaExpedicion;
        this.vigencia = vigencia;
    }
    get getTipo() {
        return this.tipoLicencia;
    }
    get getFechaExp() {
        return this.fechaExpedicion;
    }
    get getVigencia() {
        return this.vigencia;
    }
}
exports.LicenciaConduccion = LicenciaConduccion;
