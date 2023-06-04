import { Motorizado } from './Motorizado';

export class Motocicleta extends Motorizado {
  private cilindraje: number;

  constructor(marca: string, modelo: string, color: string, ruedas: number, placa: string, velocidadMaxima: number, cilindraje: number) {
    super(marca, modelo, color, ruedas, placa, velocidadMaxima);
    this.cilindraje = cilindraje;
  }

  get getCilindraje(): number {
    return this.cilindraje;
  }
}
