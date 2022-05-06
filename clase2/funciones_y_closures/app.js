function mostrarLista(lista) {
    if(lista) return console.log(lista);
    if(!lista) return console.log("Lista vacía");
}

mostrarLista();

mostrarLista(["dato1", "dato2", "dato3"]);

(function (lista) {
    if(lista) return console.log(lista);
    if(!lista) return console.log("Lista vacía");
})([1, 2, 3]);

function crearMultiplicador(num1) {
    return (function(num2) {
        return num1 * num2;
    })(5);
}

function duplicar(num) {
    return console.log(num ** 2);
}

function triplicar(num) {
    return console.log(num ** 3);
}

crearMultiplicador(3);

duplicar(crearMultiplicador(3));
triplicar(crearMultiplicador(3));

duplicar(crearMultiplicador(2));
triplicar(crearMultiplicador(2));