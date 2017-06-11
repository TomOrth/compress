const compress = require('../db/compress');
module.exports = (req, res, next) => {
    console.log('entered');
    compress.retrieve(req.params.key, (err, results) => {
        console.log(results);
        if (err) console.log('error');
        else res.redirect(results.url);
    });   
};

