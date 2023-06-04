"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Accidente_1 = require("./modules/Accidente");
const Vehiculo_1 = require("./modules/Vehiculo");
const Persona_1 = require("./modules/Persona");
const LicenciaConduccion_1 = require("./modules/LicenciaConduccion");
const Bicicleta_1 = require("./modules/Bicicleta");
const Carro_1 = require("./modules/Carro");
const Motocicleta_1 = require("./modules/Motocicleta");
const ReporteAccidente_1 = require("./modules/ReporteAccidente");
// Crear instancias de las clases
// Accidente
const accidente1 = new Accidente_1.Accidente(new Date(), 'Colisión frontal', 3);
const accidente2 = new Accidente_1.Accidente(new Date(), 'Choque lateral', 2);
// Vehículos
const vehiculo1 = new Vehiculo_1.Vehiculo('Toyota', 'Corolla', 'Blanco', 4);
const vehiculo2 = new Vehiculo_1.Vehiculo('Honda', 'Civic', 'Rojo', 4);
// Personas
const persona1 = new Persona_1.Persona('Juan Perez', '1234567890', '123456789', 30);
const persona2 = new Persona_1.Persona('Maria Lopez', '0987654321', '987654321', 25);
// Licencia de Conducción
const licencia1 = new LicenciaConduccion_1.LicenciaConduccion('A1', new Date(), new Date('2025-12-31'));
const licencia2 = new LicenciaConduccion_1.LicenciaConduccion('B1', new Date(), new Date('2024-06-30'));
// Bicicletas
const bicicleta1 = new Bicicleta_1.Bicicleta('GW', 'BMX', 'Negro', 2, 'Deportiva', true);
const bicicleta2 = new Bicicleta_1.Bicicleta('Trek', 'Mountain Bike', 'Azul', 2, 'Urbana', false);
// Carros
const carro1 = new Carro_1.Carro('Chevrolet', 'Spark', 'Gris', 4, 'ABC123', 120, '5 asientos');
const carro2 = new Carro_1.Carro('Ford', 'Fiesta', 'Plateado', 4, 'DEF456', 140, '4 asientos');
// Motocicletas
const motocicleta1 = new Motocicleta_1.Motocicleta('Yamaha', 'FZ', 'Negro', 2, 'GHI789', 180, 150);
const motocicleta2 = new Motocicleta_1.Motocicleta('Honda', 'CBR', 'Rojo', 2, 'JKL012', 200, 1000);
// Reporte de Accidente
const reporteAccidente = new ReporteAccidente_1.ReporteAccidente([vehiculo1, vehiculo2], [accidente1, accidente2]);
// Pruebas
// Acceso a propiedades y métodos de las instancias
console.log(accidente1.getFecha);
console.log(vehiculo1.getMarca);
console.log(persona1.getNombre);
console.log(licencia1.getTipo);
console.log(bicicleta1.getTipo);
console.log(carro1.getAsientos);
console.log(motocicleta1.getCilindraje);
console.log(reporteAccidente.getInvolucrados);
console.log(reporteAccidente.getReportes);
