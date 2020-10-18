var db = require('../models')

module.exports = function(app){
    app.post('/api/continents', function(req, res){
        console.log('here2');
        db.continent.create({
            names: req.body.names,
            area_km: req.body.area_km,
            pop: req.body.pop,
            number_countries: req.body.number_countries,
            largest_country: req.body.largest_country,
            popular_dish: req.body.popular_dish 
        }).then(function(data){
            res.json(data)
        })
    }
    )

    app.get('/api/continents/:names', function(req, res){
        console.log(req);
        db.continent.findOne({
            where: {
                names: req.params.names
            }
        }).then(function(results){
            res.json(results);
        })
    });

    app.post('/api/continents/emails', function(req, res){
    //refers to table
        console.log(req.body.emails);
        db.emails.create({
            //refers to column in table
            email_address: req.body.emails
            }).then(function(results) {
                res.json(results);
            })
        })

}

//front end is responsible for creating an ajax request with key name email and the value set to the text inside of the newsletter input