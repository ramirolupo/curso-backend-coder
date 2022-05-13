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

### Funciones y Closures

1. Definir la función mostrarLista que reciba una lista de datos y muestre su contenido, si no está vacía, o de lo contrario muestre el mensaje: “lista vacía”. Luego, invocarla con datos de prueba para verificar que funciona bien en ambos casos.

2. Definir una función anónima que haga lo mismo que la del punto 1, e invocarla inmediatamente, pasando una lista con 3 números como argumento.

3. Definir la función crearMultiplicador que reciba un número y devuelva una función anónima que reciba segundo número y dé como resultado el producto de ambos. Luego, a partir de la función definida, crear dos funciones duplicar y triplicar, y probarlas con diferentes valores.

### Clases

En este ejercicio construiremos una herramienta que permita que diferentes personas puedan llevar cuentas individuales sobre algo que deseen contabilizar, al mismo tiempo que nos brinde una contabilidad general del total contado. Para ello:

1. Definir la clase Contador.

2. Cada instancia de contador debe ser identificada con el nombre de la persona responsable de ese conteo.

3. Cada instancia inicia su cuenta individual en cero.

4. La clase en sí misma posee un valor estático con el que lleva la cuenta de todo lo contado por sus instancias, el cual también inicia en cero.

5. Definir un método obtenerResponsable que devuelva el nombre del responsable de la instancia.

6. Definir un método obtenerCuentaIndividual que devuelva la cantidad contada por la instancia.

7. Definir un método obtenerCuentaGlobal que devuelva la cantidad contada por todos los contadores creados hasta el momento.

8. Definir el método contar que incremente en uno tanto la cuenta individual como la cuenta general.

### Clases II

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

# CLASE 4

### Asincronismo y callbacks

1. Desarrollar una función ‘mostrarLetras’ que reciba un string como parámetro y permita mostrar una vez por segundo cada uno de sus caracteres.
2. Al finalizar, debe invocar a la siguiente función que se le pasa también como parámetro: const fin = () => console.log('terminé')
3. Realizar tres llamadas a ‘mostrarLetras’ con el mensaje ‘¡Hola!’ y demoras de 0, 250 y 500 mS verificando que los mensajes de salida se intercalen.

### Fecha y hora

1. Realizar un programa que:
    - A) Guarde en un archivo llamado fyh.txt la fecha y hora actual.
    - B) Lea nuestro propio archivo de programa y lo muestre por consola.
    - C) Incluya el manejo de errores con try catch (progresando las excepciones con throw new Error).

## Lectura y escritura de archivos

1. Escribir un programa ejecutable bajo node.js que realice las siguientes acciones:
    - Abra una terminal en el directorio del archivo y ejecute la instrucción: npm init -y. Esto creará un archivo especial (lo veremos más adelante) de nombre package.json.
    - Lea el archivo package.json y declare un objeto con el siguiente formato y datos:
        - const info = {
          contenidoStr: (contenido del archivo leído en formato string),
          contenidoObj: (contenido del archivo leído en formato objeto),
          size: (tamaño en bytes del archivo)
          }

-   Muestre por consola el objeto info luego de leer el archivo
-   Guardar el objeto info en un archivo llamado info.txt dentro de la misma carpeta de package.json
-   Incluir el manejo de errores (con throw new Error)

##### Aclaraciones:

-   Utilizar la lectura y escritura de archivos en modo asincrónico con callbacks.
-   Para deserializar un string con contenido JSON utilizar JSON.parse (convierte string en object).
-   Para serializar un objeto (convertirlo a string) y guardarlo en un archivo utilizar JSON.stringify.

##### Ayuda:

Para el Punto 3 considerar usar JSON.stringify(info, null, 2) para preservar el formato de representación del objeto en el archivo (2 representa en este caso la cantidad de espacios de indentación usadas al representar el objeto como string).
