"use strict";
class Vehiculo {
    constructor(marca, modelo, color, ruedas) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.ruedas = ruedas;
    }
    get getMarca() {
        return this.marca;
    }
    get getModelo() {
        return this.modelo;
    }
    get getColor() {
        return this.color;
    }
    get getRuedas() {
        return this.ruedas;
    }
}
class Bicicleta extends Vehiculo {
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
class Motorizado extends Vehiculo {
    constructor(marca, modelo, color, ruedas, placa, velocidadMaxima) {
        super(marca, modelo, color, ruedas);
        this.placa = placa;
        this.velocidadMaxima = velocidadMaxima;
    }
    get getPlaca() {
        return this.placa;
    }
    get getVelMax() {
        return this.velocidadMaxima;
    }
}
class Carro extends Motorizado {
    constructor(marca, modelo, color, ruedas, placa, velocidadMaxima, asientos) {
        super(marca, modelo, color, ruedas, placa, velocidadMaxima);
        this.asientos = asientos;
    }
    get getAsientos() {
        return this.asientos;
    }
}
class Motocicleta extends Motorizado {
    constructor(marca, modelo, color, ruedas, placa, velocidadMaxima, cilindraje) {
        super(marca, modelo, color, ruedas, placa, velocidadMaxima);
        this.cilindraje = cilindraje;
    }
    get getCilindraje() {
        return this.cilindraje;
    }
}
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
// Crear instancias de las clases
// Accidente
const accidente1 = new Accidente(new Date(), 'Colisión frontal', 3);
const accidente2 = new Accidente(new Date(), 'Choque lateral', 2);
// Vehículos
const vehiculo1 = new Vehiculo('Toyota', 'Corolla', 'Blanco', 4);
const vehiculo2 = new Vehiculo('Honda', 'Civic', 'Rojo', 4);
// Personas
const persona1 = new Persona('Juan Perez', '1234567890', '123456789', 30);
const persona2 = new Persona('Maria Lopez', '0987654321', '987654321', 25);
// Licencia de Conducción
const licencia1 = new LicenciaConduccion('A1', new Date(), new Date('2025-12-31'));
const licencia2 = new LicenciaConduccion('B1', new Date(), new Date('2024-06-30'));
// Bicicletas
const bicicleta1 = new Bicicleta('GW', 'BMX', 'Negro', 2, 'Deportiva', true);
const bicicleta2 = new Bicicleta('Trek', 'Mountain Bike', 'Azul', 2, 'Urbana', false);
// Carros
const carro1 = new Carro('Chevrolet', 'Spark', 'Gris', 4, 'ABC123', 120, '5 asientos');
const carro2 = new Carro('Ford', 'Fiesta', 'Plateado', 4, 'DEF456', 140, '4 asientos');
// Motocicletas
const motocicleta1 = new Motocicleta('Yamaha', 'FZ', 'Negro', 2, 'GHI789', 180, 150);
const motocicleta2 = new Motocicleta('Honda', 'CBR', 'Rojo', 2, 'JKL012', 200, 1000);
// Reporte de Accidente
const reporteAccidente = new ReporteAccidente([vehiculo1, vehiculo2], [accidente1, accidente2]);
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
