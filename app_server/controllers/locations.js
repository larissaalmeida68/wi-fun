/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Wi-fun',
        pageHeader: {
            title: 'Wi-fun',
            strapline: 'Encontre lugares com wi-fi perto de você!'
        },
        sidebar: "Buscando wi-fi e cadeira? Wi-fun te ajuda a encontrar lugares para trabalhar. Quer cerveja, bolo ou café? Deixa que a gente te ajuda.",
        locations: [{
            name: 'Boken Café',
            address: 'Av. Tancredo Neves, 1110 - Parque 10 de Novembro, Manaus - AM, 69055-010',
            rating: 3,
            facilities: ['Bebidas quentes', 'Comida', 'Wifi'],
            distance: '100m'
        }, {
            name: 'Morada Café',
            address: 'Av. Via Láctea, 10 - Aleixo, Manaus - AM, 69060-085',
            rating: 4,
            facilities: ['Bebidas quentes', 'Comida', 'Wifi'],
            distance: '200m'
        }, {
            name: 'Do Futuro Café',
            address: 'Av. Pedro Teixeira, 351 - Dom Pedro, Manaus - AM, 69040-000',
            rating: 2,
            facilities: ['Bebidas quentes', 'Comida', 'Wifi'],
            distance: '250m'
        }]
    });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Boken Café',
        pageHeader: {
            title: 'Boken Café'
        },
        sidebar: {
            context: 'está no Wi-fun por ter espaço acessível para se sentar com o seu laptop e fazer algum trabalho.',
            callToAction: 'Se você já foi e gostou, ou não, por favor, deixe um comentário para ajudar outras pessoas como você.'
        },
        location: {
            name: 'Boken Café',
            address: 'Av. Tancredo Neves, 1110 - Parque 10 de Novembro, Manaus - AM, 69055-010',
            rating: 3,
            facilities: ['Bebidas quentes', 'Comida', 'Wifi'],
            coords: {
                lat: -3.455041,
                lng: -60.9690884
            },
            openingTimes: [{
                days: 'Segunda - Sexta',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Sábado',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Domingo',
                closed: true
            }],
            reviews: [{
                author: 'Larissa Almeida',
                rating: 5,
                timestamp: '16 Janeiro 2019',
                reviewText: 'Uma das agradáveis novidades... Ambiente diferenciado, bom atendimento, comida deliciosa. Bem movimentado. Às vezes um pouco de espera por Mesa é necessaria.'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 Fevereiro 2019',
                reviewText: 'ótima opção para refeições, muito sabor e preço acessível e tem opções de lanche rápido também. ambiente agradável e bom atendimento. Wi-fi excelente!'
            }]
        }
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Boken Café no Wi-fun',
        pageHeader: {
            title: 'Review Boken Café'
        }
    });
};