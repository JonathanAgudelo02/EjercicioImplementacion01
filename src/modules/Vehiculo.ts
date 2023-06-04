import { Persona } from "./Persona";
import { Accidente } from "./Accidente";

export class Vehiculo {
  private marca: string;
  private modelo: string;
  private color: string;
  private ruedas: number;
  public propietario: Persona | null;
  public reportes: Accidente[];

  constructor(marca: string, modelo: string, color: string, ruedas: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.ruedas = ruedas;
    this.propietario = null;
    this.reportes = [];
  }
}
