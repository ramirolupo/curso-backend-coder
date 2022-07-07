# MongoDB: CRUD

1. Desarrollar un proyecto en Node.js que realice la lectura de los estudiantes de la base colegio (creada anteriormente) mostrándolos en consola, cumpliendo con los siguientes puntos:
   a) Los estudiantes ordenados por orden alfabético según sus nombres.
   b) El estudiante más joven.
   c) Los estudiantes que pertenezcan al curso '2A'.
   d) El segundo estudiante más joven.
   e) Sólo los nombres y apellidos de los estudiantes con su curso correspondiente, ordenados por apellido descendente (z a a).
   Los estudiantes que sacaron 10.
   f) El promedio de notas del total de alumnos.
   g) El promedio de notas del curso '1A'.
2. Utilizar la interfaz basada en Promises de Mongoose, sintaxis then/catch con importación de módulos en formato CommonJS.
3. Los resultados se deben imprimir en orden según los puntos citados (Promesas anidadas con .then)

### 2

Realizar un proyecto en Node.js que sobre la base colegio realice las siguientes acciones:

1. Actualizar el dni del estudiante Lucas Blanco a 20355875
2. Agregar un campo 'ingreso' a todos los documentos con el valor false
3. Modificar el valor de 'ingreso' a true para todos los estudiantes que pertenezcan al curso 1A
4. Listar los estudiantes que aprobaron (hayan sacado de 4 en adelante) sin los campos de \_id y \*\*v
5. Listar los estudiantes que posean el campo 'ingreso' en true sin los campos de \_id y \*\*v
6. Borrar de la colección de estudiantes los documentos cuyo campo 'ingreso' esté en true
7. Listar el contenido de la colección estudiantes utilizando la consola, imprimiendo en cada caso los datos almacenados (sin el campo \_\_v) junto a su fecha de creación obtenida del ObjectID en formato YYYY/MM/DD HH:mm:SS.
   Por ejemplo:
   {"\_id":"604df61b5e39a84ba41313e4","nombre":"Fabio","apellido":"Pieres","edad":39,"dni":"4315388","curso":"1B","nota":9,"ingreso":false} -> Fecha creación: 14/3/2021 08:40:11
8. Implementar estas funciones utilizando Promises en Mongoose con sintaxis async/await, utilizando la importación en formato ES Modules (import)
9. Verificar la información de la base 'colegio' a través de algún cliente (compass, etc).

### 3

Realizar un proyecto en Node.js que sobre la base colegio realice las siguientes acciones:

1. Actualizar el dni del estudiante Lucas Blanco a 20355875
2. Agregar un campo 'ingreso' a todos los documentos con el valor false
3. Modificar el valor de 'ingreso' a true para todos los estudiantes que pertenezcan al curso 1A
4. Listar los estudiantes que aprobaron (hayan sacado de 4 en adelante) sin los campos de \_id y \*\*v
5. Listar los estudiantes que posean el campo 'ingreso' en true sin los campos de \_id y \*\*v
6. Borrar de la colección de estudiantes los documentos cuyo campo 'ingreso' esté en true
7. Listar el contenido de la colección estudiantes utilizando la consola, imprimiendo en cada caso los datos almacenados (sin el campo \_\_v) junto a su fecha de creación obtenida del ObjectID en formato YYYY/MM/DD HH:mm:SS.
   Por ejemplo:
   {"\_id":"604df61b5e39a84ba41313e4","nombre":"Fabio","apellido":"Pieres","edad":39,"dni":"4315388","curso":"1B","nota":9,"ingreso":false} -> Fecha creación: 14/3/2021 08:40:11
8. Implementar estas funciones utilizando Promises en Mongoose con sintaxis async/await, utilizando la importación en formato ES Modules (import)
9. Verificar la información de la base 'colegio' a través de Robo 3T
