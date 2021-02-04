exports.success = function(req, res, user, status){
    res.status(status || 200).send({
        error: '',
        body:user
    });
}

exports.error = function(req, res, user, status){
    res.status(status || 500).send({
        error: user,
        body: ''
    });
}