const express = require('express');
const path = require('path');
const app =  express();

// Configurar el motor de plantillas como PUG
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
res.render('index', { title: 'Inicio', message: 'Bienvenido a mi sitio web con PUG y Express' });
});
app.get('/nosotros', (req, res) => {
res.render('nosotros', { title: 'Sobre Nosotros', content: 'Esta es la página sobre nosotros.' });
});

app.get('/blog', (req, res) =>{
    const posts=  [
        {
            title: 'Aprendiendo JavaScript desde Cero',
            date: '14 de enero de 2025',
            excerpt: 'Descubre cómo comenzar a aprender JavaScript de manera efectiva...',
            link: '/blog/javascript' //link roto
        },
        
        {
            title: 'Express: El framework minimalista de Node.js',
            date: '10 de enero de 2025',
            excerpt: 'Un recorrido por las funcionalidades clave de Express...',
            link: '/blog/express' //link roto
        },

        {
            title: 'Ventajas de usar PUG como motor de plantillas',
            date: '5 de enero de 2025',
            excerpt: 'Explora por qué PUG es una excelente opción para renderizar vistas dinámicas...',
            link: '/blog/pug' //link roto
        }
    ];


    res.render('blog', {
            title: 'Blog',
            content: 'Esta es la página del blog.',
            posts: posts,
            year: new Date().getFullYear()
    });
});

    // Iniciar el servidor
    const PORT = 3003;
    app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });


