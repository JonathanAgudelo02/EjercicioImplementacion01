import { Motorizado } from "./Motorizado";

export class Motocicleta extends Motorizado {
  private cilindraje: number;

  constructor(placa: string, velocidadMaxima: number, cilindraje: number) {
    super(placa, velocidadMaxima);
    this.cilindraje = cilindraje;
  }
}
