# CLASE 1

### Datos y variables

1. Definir variables variables que almacenen los siguiente datos:
    - Un nombre: “pepe”
    - Una edad: 25
    - Un precio: $99.90
    - Los nombres de mis series favoritas: “Dark”, “Mr Robot”, “Castlevania”.
    - Mis películas favoritas, en donde cada película detalla su nombre, el año de estreno, y una lista con los nombres de sus protagonistas.
    - Mostrar todos esos valores por consola.
    - Incrementar la edad en 1 y volver a mostrarla.
    - Agregar una serie a la lista y volver a mostrarla.

# CLASE 2

### Clases

1. Declarar una clase Usuario

2. Hacer que Usuario cuente con los siguientes atributos:
nombre: String
apellido: String
libros: Object[]
mascotas: String[]

Los valores de los atributos se deberán cargar a través del constructor, al momento de crear las instancias.

3. Hacer que Usuario cuente con los siguientes métodos:
    - getFullName(): String. Retorna el completo del usuario. Utilizar template strings.
    - addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.
    - countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.
    - addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
    - getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.
4. Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.
