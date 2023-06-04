import { Accidente } from "./Accidente";
import { Vehiculo } from "./Vehiculo";

export class ReporteAccidente {
  private reportes: Accidente[];
  private involucrados: Vehiculo;

  constructor(involucrados: Vehiculo) {
    this.reportes = [];
    this.involucrados = involucrados;
  }

  agregarReporte(fecha: Date, descripcion: string, severidad: number) {
    const nuevoReporte = new Accidente(fecha, descripcion, severidad);
    this.reportes.push(nuevoReporte);
  }
}
