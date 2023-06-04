import { Motorizado } from './Motorizado';

export class Carro extends Motorizado {
  private asientos: string;

  constructor(marca: string, modelo: string, color: string, ruedas: number, placa: string, velocidadMaxima: number, asientos: string) {
    super(marca, modelo, color, ruedas, placa, velocidadMaxima);
    this.asientos = asientos;
  }

  get getAsientos(): string {
    return this.asientos;
  }
}

