// Modulo: Vehiculo
export class Vehiculo {
    protected marca: string;
    protected modelo: string;
    protected color: string;
    protected ruedas: number;
  
    constructor(marca: string, modelo: string, color: string, ruedas: number) {
      this.marca = marca;
      this.modelo = modelo;
      this.color = color;
      this.ruedas = ruedas;
    }

    get getMarca(): string {
      return this.marca;
    }

    get getModelo(): string {
      return this.modelo;
    }

    get getColor(): string {
      return this.color;
    }

    get getRuedas(): number {
      return this.ruedas;
    }
  }