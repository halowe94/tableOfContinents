var db = require('../models')

module.exports = function(app){
    app.post('/api/continent', function(req, res){
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

    app.get('/api/continent', function(req, res){
        db.continent.findOne({
            where: {
                names: req.params.names
            }
        }).then(function(results){
            res.render(results.names);
        })
    });

    // app.post('/api/email', function(req, res){
    //     db.email.update(req.body, 
    //         {
    //             where:
    //         })
    // })
}