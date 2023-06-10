class Vehiculo {
    protected marca: string;
    protected modelo: string;
    protected color: string;
    protected ruedas: number;

    constructor(marca: string, modelo: string, color: string, ruedas: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.ruedas = ruedas;
    }

    get getMarca(): string {
        return this.marca;
    }

    get getModelo(): string {
        return this.modelo;
    }

    get getColor(): string {
        return this.color;
    }

    get getRuedas(): number {
        return this.ruedas;
    }
}

class Bicicleta extends Vehiculo {
    private tipo: "Urbana" | "Deportiva";
    private luces: boolean;

    constructor(marca: string, modelo: string, color: string, ruedas: number, tipo: "Urbana" | "Deportiva", luces: boolean) {
        super(marca, modelo, color, ruedas);
        this.tipo = tipo;
        this.luces = luces;
    }

    get getTipo(): string {
        return this.tipo;
    }

    get getLuces(): boolean {
        return this.luces;
    }
}

class Motorizado extends Vehiculo {
    protected placa: string;
    protected velocidadMaxima: number;

    constructor(marca: string, modelo: string, color: string, ruedas: number, placa: string, velocidadMaxima: number) {
        super(marca, modelo, color, ruedas);
        this.placa = placa;
        this.velocidadMaxima = velocidadMaxima;
    }

    get getPlaca(): string {
        return this.placa;
    }

    get getVelMax(): number {
        return this.velocidadMaxima;
    }
}

class Carro extends Motorizado {
    private asientos: string;

    constructor(marca: string, modelo: string, color: string, ruedas: number, placa: string, velocidadMaxima: number, asientos: string) {
        super(marca, modelo, color, ruedas, placa, velocidadMaxima);
        this.asientos = asientos;
    }

    get getAsientos(): string {
        return this.asientos;
    }
}

class Motocicleta extends Motorizado {
    private cilindraje: number;

    constructor(marca: string, modelo: string, color: string, ruedas: number, placa: string, velocidadMaxima: number, cilindraje: number) {
        super(marca, modelo, color, ruedas, placa, velocidadMaxima);
        this.cilindraje = cilindraje;
    }

    get getCilindraje(): number {
        return this.cilindraje;
    }
}

class Accidente {
    private fecha: Date;
    private descripcion: string;
    private severidad: number;
    public involucrados: Vehiculo[];

    constructor(fecha: Date, descripcion: string, severidad: number) {
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.severidad = severidad;
        this.involucrados = [];
    }

    get getFecha(): Date {
        return this.fecha;
    }

    get getDescripcion(): string {
        return this.descripcion;
    }

    get getSeveridad(): number {
        return this.severidad;
    }

    get getInvolucrados(): Vehiculo[] {
        return this.involucrados;
    }
}

class ReporteAccidente {
    private involucrados: Vehiculo[];
    private reportes: Accidente[];

    constructor(involucrados: Vehiculo[], reportes: Accidente[]) {
        this.involucrados = involucrados;
        this.reportes = reportes;
    }

    get getInvolucrados(): Vehiculo[] {
        return this.involucrados;
    }

    get getReportes(): Accidente[] {
        return this.reportes;
    }

}
class Persona {
    private nombre: string;
    public cedula: string;
    public telefono: string;
    public edad: number;
    public vehiculos: Vehiculo[];

    constructor(nombre: string, cedula: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.telefono = telefono;
        this.edad = edad;
        this.vehiculos = [];
    }

    get getNombre(): string {
        return this.nombre;
    }
    get getCedula(): string {
        return this.cedula;
    }
    get getTelefono(): string {
        return this.telefono;
    }
    get getEdad(): number {
        return this.edad;
    }
    get getVehiculos(): Vehiculo[] {
        return this.vehiculos;
    }
}

class LicenciaConduccion {
    private tipoLicencia: string;
    private fechaExpedicion: Date;
    private vigencia: Date;

    constructor(tipoLicencia: string, fechaExpedicion: Date, vigencia: Date) {
        this.tipoLicencia = tipoLicencia;
        this.fechaExpedicion = fechaExpedicion;
        this.vigencia = vigencia;
    }

    get getTipo(): string {
        return this.tipoLicencia;
    }

    get getFechaExp(): Date {
        return this.fechaExpedicion;
    }

    get getVigencia(): Date {
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

