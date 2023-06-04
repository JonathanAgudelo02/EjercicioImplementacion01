"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = require("./modules/Persona");
const LicenciaConduccion_1 = require("./modules/LicenciaConduccion");
const Vehiculo_1 = require("./modules/Vehiculo");
const Accidente_1 = require("./modules/Accidente");
// Ejemplo de uso
const persona = new Persona_1.Persona("Juan Perez", "123456789", ["1234567890"], 30);
const licencia = new LicenciaConduccion_1.LicenciaConduccion("Clase B", new Date(), new Date());
const vehiculo = new Vehiculo_1.Vehiculo("Toyota", "Corolla", "Rojo", 4);
persona.vehiculos.push(vehiculo);
vehiculo.propietario = persona;
const accidente = new Accidente_1.Accidente(new Date(), "Colisión frontal", 3);
accidente.involucrados.push(vehiculo);
vehiculo.reportes.push(accidente);
console.log(persona);
console.log(vehiculo);
console.log(accidente);
