import { Vehiculo } from './Vehiculo';

export class Bicicleta extends Vehiculo {
  private tipo: "Urbana" | "Deportiva";
  private luces: boolean;

  constructor(marca: string, modelo: string, color: string, ruedas: number, tipo: "Urbana" | "Deportiva", luces: boolean) {
    super(marca, modelo, color, ruedas);
    this.tipo = tipo;
    this.luces = luces;
  }

  get getTipo(): string {
    return this.tipo;
  }

  get getLuces(): boolean {
    return this.luces;
  }
}
