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

### Lectura y escritura de archivos

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

### Lectura y escritura con promises

1. Realizar un programa que ejecute las siguientes tareas:
    - Lea el archivo info.txt generado en el desafío anterior deserializándolo en un objeto llamado info.
    - Mostrar este objeto info en la consola.
    - Modifique el author a "Coderhouse" y guarde el objeto serializado en otro archivo llamado package.json.coder
    - Mostrar los errores por consola.

##### Aclaraciones:

-   Trabajar con fs.promises (then/catch).

##### Ayuda:

-   Para el punto 3 considerar usar JSON.stringify(info.contenidoObj, null,2) para preservar el formato de representación del objeto en el archivo.

### Manejo de archivos

> > Consigna: Implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo con el que va a trabajar e implemente los siguientes métodos:

-   save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
-   getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
-   getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
-   deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
-   deleteAll(): void - Elimina todos los objetos presentes en el archivo.

# CLASE 5

### Números aleatorios

- Crear un proyecto en node.js que genere 10000 números aleatorios en el rango  de 1 a 20.
- Crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.

### Array de objetos

- Desarrollar un proyecto en node.js que declare un array de objetos de este tipo:

const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

- Y obtenga la siguiente información de dicho array
    - Los nombres de los productos en un string separados por comas.
    - El precio total
    - El precio promedio
    - El producto con menor precio
    - El producto con mayor precio
    - Con los datos de los puntos 1 al 5 crear un objeto y representarlo por consola

##### Aclaración: todos los valores monetarios serán expresados con 2 decimales

### Calculadora de edad

1. Realizar un proyecto en node.js que permita calcular cuántos años y días totales transcurrieron desde la fecha de tu nacimiento. Para ello utilizar la dependencia moment instalándola en forma local desde npm. Imprimir los resultados por consola. Hacer las modificaciones necesarias para que sólo se actualicen los patches para la librería recién instalada.

Un ejemplo de salida:
Hoy es 11/01/2021
Nací el 29/11/1968
Desde mi nacimiento han pasado 52 años.
Desde mi nacimiento han pasado 19036 días.

#### Ayuda:
Utilizar los métodos diff y format de la librería moment.

# Clase 6

### Mensaje según la hora

1. Desarrollar un servidor en node.js que escuche peticiones en el puerto 8080 y responda un mensaje de acuerdo a la hora actual: 
    - Si la hora actual se encuentra entre las 6 y las 12 hs será 'Buenos días!'.
    - Entre las 13 y las 19 hs será 'Buenas tardes!'. 
    - De 20 a 5 hs será 'Buenas noches!'.

2. Se mostrará por consola cuando el servidor esté listo para operar y en qué puerto lo está haciendo.

### Servidor con express

1. Crear un proyecto de servidor http en node.js que utilice la dependencia express, escuche en el puerto 8080 y tenga tres rutas get configuradas:
    - '/' en esta ruta raíz, el servidor enviará string con un elemento de título nivel 1 (un h1 en formato HTML) que contenga el mensaje: 'Bienvenidos al servidor express' en color azul.
    - '/visitas' donde con cada request, el servidor devolverá un mensaje con la cantidad de visitas que se hayan realizado a este endpoint. Por ej. 'La cantidad de visitas es 10'
    - '/fyh' donde se devolverá la fecha y hora actual en formato objeto: 
    { fyh: '11/1/2021 11:36:04' }

2. Mostrar por consola el puerto de escucha del servidor al momento de realizar el listen. En caso de error, representar el detalle.

### Desafío entregable: Servidor con express

1. Realizar un proyecto de servidor basado en node.js que utilice el módulo express e implemente los siguientes endpoints en el puerto 8080:
    - Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servidor
    - Ruta get '/productoRandom' que devuelva un producto elegido al azar entre todos los productos disponibles
    - Incluir un archivo de texto 'productos.txt' y utilizar la clase Contenedor del desafío anterior para acceder a los datos persistidos del servidor.

2. Antes de iniciar el servidor, colocar en el archivo 'productos.txt' tres productos como en el ejemplo del desafío anterior.

# Clase 7

Dada la siguiente constante: const frase = 'Hola mundo cómo están'
1. Realizar un servidor con API Rest usando node.js y express que contenga los siguientes endpoints get:

    - '/api/frase' -> devuelve la frase en forma completa en un campo ‘frase’.
    - '/api/letras/:num  -> devuelve por número de orden la letra dentro de esa frase (num 1 refiere a la primera letra), en un campo ‘letra’.
    - '/api/palabras/:num  -> devuelve por número de orden la palabra dentro de esa frase (num 1 refiere a la primera palabra), en un campo ‘palabra’.