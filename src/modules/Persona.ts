import { Vehiculo } from "./Vehiculo";

export class Persona {
  private nombre: string;
  private cedula: string;
  private telefono: string[];
  private edad: number;
  public vehiculos: Vehiculo[];

  constructor(nombre: string, cedula: string, telefono: string[], edad: number) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.telefono = telefono;
    this.edad = edad;
    this.vehiculos = [];
  }
}
