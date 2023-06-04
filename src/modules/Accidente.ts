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
