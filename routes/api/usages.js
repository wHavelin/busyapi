module.exports = function(app){
    app.post('/api/usages', function(req, res){

        // Store the supplied usage data
        app.usages.push(req.body);

        res.status(201).json({'id':app.usages.length;});
    });
}
