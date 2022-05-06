class Contador {
    constructor(nombre) {
        this.nombre = nombre;
        this.cuentaIndividual = 0;
    }
    static cuentaGlobal = 0;
    obtenerResponsable() {
        return console.log(`Nombre del responsable: ${this.nombre}`);
    }
    obtenerCuentaIndividual() {
        return console.log(`Cuenta individual: ${this.cuentaIndividual}`);
    }
    obtenerCuentaGlobal() {
        return console.log(`Cuenta global: ${Contador.cuentaGlobal}`);
    }
    contar() {
        this.cuentaIndividual++;
        Contador.cuentaGlobal++;
    }
}

//Instancia la clase Contador
const contador1 = new Contador("Nombre1");
const contador2 = new Contador("Nombre2");

//Ejecuto los métodos de las instancias creadas
contador1.obtenerResponsable();
contador1.obtenerCuentaIndividual();
contador1.contar();
contador1.obtenerCuentaIndividual();
contador1.obtenerCuentaGlobal();

contador2.obtenerResponsable();
contador2.obtenerCuentaIndividual();
contador2.contar();
contador2.contar();
contador2.obtenerCuentaIndividual();
contador2.obtenerCuentaGlobal();