export class LicenciaConduccion {
    private tipoLicencia: string;
    private fechaExpedicion: Date;
    private vigencia: Date;
  
    constructor(tipoLicencia: string, fechaExpedicion: Date, vigencia: Date) {
      this.tipoLicencia = tipoLicencia;
      this.fechaExpedicion = fechaExpedicion;
      this.vigencia = vigencia;
    }
  }
  