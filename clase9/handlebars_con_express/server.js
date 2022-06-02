const express = require('express');
const { engine } = require('express-handlebars');

const PORT = 8080;
const app = express();
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) });

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    const datos = {
        nombre: 'Esteban',
        apellido: 'Zárate',
        edad: '36',
        email: 'estebanzaratedev@gmail.com',
        telefono: 1122771652
    }
    res.render('datos', datos);
})