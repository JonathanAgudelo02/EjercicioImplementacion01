"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, cedula, telefono, edad) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.telefono = telefono;
        this.edad = edad;
        this.vehiculos = [];
    }
    get getNombre() {
        return this.nombre;
    }
    get getCedula() {
        return this.cedula;
    }
    get getTelefono() {
        return this.telefono;
    }
    get getEdad() {
        return this.edad;
    }
    get getVehiculos() {
        return this.vehiculos;
    }
}
exports.Persona = Persona;
