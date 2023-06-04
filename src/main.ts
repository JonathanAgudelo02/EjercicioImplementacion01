import { Persona } from "./modules/Persona";
import { LicenciaConduccion } from "./modules/LicenciaConduccion";
import { Vehiculo } from "./modules/Vehiculo";
import { Accidente } from "./modules/Accidente";

// Ejemplo de uso
const persona = new Persona("Juan Perez", "123456789", ["1234567890"], 30);
const licencia = new LicenciaConduccion("Clase B", new Date(), new Date());
const vehiculo = new Vehiculo("Toyota", "Corolla", "Rojo", 4);
persona.vehiculos.push(vehiculo);
vehiculo.propietario = persona;

const accidente = new Accidente(new Date(), "Colisión frontal", 3);
accidente.involucrados.push(vehiculo);
vehiculo.reportes.push(accidente);

console.log(persona);
console.log(vehiculo);
console.log(accidente);
