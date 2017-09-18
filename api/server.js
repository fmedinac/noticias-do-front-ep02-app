const express = require('express');

const app = express();

app.get('/', function (req, res) {
    setTimeout(function () {
        res.json({
            meta: {
                address: "Largo da Matriz\nFreguesia do Ó\nSão Paulo",
                cover: "https://abrilvejasp.files.wordpress.com/2016/11/aconchego-carioca-e-frango-jpg.jpeg?quality=70&strip=info&w=928",
                title: "FrangÓ Bar",
            },
            products: [
                {
                    sku: 1,
                    image: "http://frangobar.com.br/wp-content/uploads/2012/10/especial_coxinha.jpg",
                    price: 19.9,
                    title: "Coxinha de Frango com Catupiry",
                },
                {
                    sku: 2,
                    image: "http://frangobar.com.br/wp-content/uploads/2012/12/img_frango_passarinho.jpg",
                    price: 34.9,
                    title: "Frango à Passarinho",
                },
                {
                    sku: 3,
                    image: "http://frangobar.com.br/wp-content/uploads/2012/12/img_pasteis.jpg",
                    price: 24.9,
                    title: "Pastel Misto – carne-seca, queijo e carne (12 und)",
                },
                {
                    sku: 4,
                    image: "http://frangobar.com.br/wp-content/uploads/2012/12/img_polenta.jpg",
                    price: 10.9,
                    title: "Polentra frita",
                },
                {
                    sku: 5,
                    image: "http://frangobar.com.br/wp-content/uploads/2012/12/img_mandioquinha.jpg",
                    price: 12.9,
                    title: "Mandioca frita",
                },
                {
                    sku: 6,
                    image: "http://frangobar.com.br/wp-content/uploads/2012/12/img_croquetes1.jpg",
                    price: 19.9,
                    title: "Croquete do seu Piccolo (10 und)",
                },
                {
                    sku: 7,
                    image: "http://img.estadao.com.br/thumbs/960/resources/jpg/1/4/1441808193041.jpg",
                    price: 89.9,
                    title: "Frango assado",
                },
            ]
        });
    }, 1000);
});

app.listen(3000, function () {
    console.log('Server is running under 3000')
})
