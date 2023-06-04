import { Motorizado } from "./Motorizado";

export class Carro extends Motorizado {
  private asientos: string;

  constructor(placa: string, velocidadMaxima: number, asientos: string) {
    super(placa, velocidadMaxima);
    this.asientos = asientos;
  }
}
