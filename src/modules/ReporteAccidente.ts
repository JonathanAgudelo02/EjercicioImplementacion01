import { Vehiculo } from './Vehiculo';
import { Accidente } from './Accidente';

export class ReporteAccidente {
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
