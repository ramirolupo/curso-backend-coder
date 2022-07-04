En el POST de carrito al crear sin productos no estás devolviendo la respuesta en el endpoint para ese caso. Y el status de las respuestas deben ir antes del método json o send.

Ya que lo tenés 100% funcional, podés ordenar el código para que dentro de la carpeta controller esté la lógica que tenés en routes, como les viene enseñando el profe, tipo

async create(req, res) {

    // código

    producto.save(req.body)

    // más código

}

Es un ejemplo, también pueden ser funciones de javascript

Bueno, muy buen trabajo! Estamos hablando, saludos
