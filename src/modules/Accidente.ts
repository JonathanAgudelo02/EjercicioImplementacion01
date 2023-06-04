import { Vehiculo } from "./Vehiculo";

export class Accidente {
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
}
