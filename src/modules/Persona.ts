import { Vehiculo } from "./Vehiculo";

export class Persona {
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
