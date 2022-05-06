class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
    getFullName() {
        return console.log(`Nombre: ${this.nombre}\nApellido: ${this.apellido}`);
    }
    addMascota(mascota) {
        this.mascotas.push(mascota);
    }
    countMascotas() {
        return console.log(`Cantidad de mascotas: ${this.mascotas.length}`);
    }
    addBook(nombre, autor) {
        this.libros.push({nombre, autor});
    }
    getBookNames() {
        console.log(`Libros de ${this.nombre} ${this.apellido}:`);
        return this.libros.forEach(libro => console.log(`\t-${libro.nombre}`));
    }
}

//Crea usuario
const usuario = new Usuario("Javier", "Milei");

//Muestra el nombre completo del usuario creado
usuario.getFullName();

//Agrega una mascota al array de mascotas del usuario
usuario.addMascota("León");
usuario.addMascota("Mastín");

//Muestra la cantidad de mascostas que tiene el usuario
usuario.countMascotas();

//Agrega un libro al array de libros del usuario
usuario.addBook("La riqueza de las naciones", "Adam Smith");
usuario.addBook("La virtud del egoismo", "Ayn Rand");
usuario.addBook("La fatal arrogancia", "Friedrich Hayek ");

//Muestra los nombres de los libros del usuario
usuario.getBookNames();