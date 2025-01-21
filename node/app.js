const express = require('express');
const path = require('path');
const app = express();

// Configurar el motor de plantillas como PUG
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Inicio', 
        message: 'Bienvenido a mi sitio web con PUG y Express' 
    });
});
app.get('/about', (req, res) => {
    res.render('about', { 
        title: 'Sobre Nosotros', 
        content: 'Esta es la página sobre nosotros.' 
    });
});
app.get('/blog', (req, res) => {
    res.render('blog', { 
        title: 'Servicios del blog', 
        content: 'Servicios del blog.' 
    });
});
app.get('/service', (req, res) => {
    res.render('service', { 
        title: 'Noticias', 
        content: 'Noticias del día.',
        imgP: imagenP.jpg,
        altP: 'Descripcion de la imagen principal',
        img2: imagen2.png,
        alt2: 'Texto alternativo imagen 2'
    });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
