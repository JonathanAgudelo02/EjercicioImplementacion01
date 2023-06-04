import { Vehiculo } from './Vehiculo';

export class Motorizado extends Vehiculo {
  protected placa: string;
  protected velocidadMaxima: number;

  constructor(marca: string, modelo: string, color: string, ruedas: number, placa: string, velocidadMaxima: number) {
    super(marca, modelo, color, ruedas);
    this.placa = placa;
    this.velocidadMaxima = velocidadMaxima;
  }

  get getPlaca(): string {
    return this.placa;
  }

  get getVelMax(): number {
    return this.velocidadMaxima;
  }
}
