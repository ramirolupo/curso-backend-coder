class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota(mascota) {
        this.mascotas.push(mascota);
    }
    countMascotas() {
        return `${this.mascotas.length}`;
    }
    addBook(libro) {
        this.libros.push(libro);
    }
    getBookNames() {
        return this.libros.map(libro => `${libro.nombre}`);
    }
}

//Crea usuario
const usuario = new Usuario("Javier", "Milei", [{nombre: "La Ley", autor: "Frédéric Bastiat"}, {nombre: "1984", autor: "George Orwell"}], ["Milton", "Ramiro"]);

//Muestra el nombre completo del usuario creado
console.log(usuario.getFullName());;

//Agrega una mascota al array de mascotas del usuario
usuario.addMascota("León");
usuario.addMascota("Mastín");

//Muestra la cantidad de mascostas que tiene el usuario
console.log(usuario.countMascotas());;

//Agrega un libro al array de libros del usuario
usuario.addBook({nombre: "La riqueza de las naciones", autor: "Adam Smith"});
usuario.addBook({nombre: "La virtud del egoismo", autor: "Ayn Rand"});
usuario.addBook({nombre: "La fatal arrogancia", autor: "Friedrich Hayek "});

//Muestra los nombres de los libros del usuario
console.log(usuario.getBookNames());;