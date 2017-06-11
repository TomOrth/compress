const randomKey = require('./utils/randomKey')
const compress = require('../db/compress')
module.exports = (req, res, next) => {
    const data = req.body.url;
    const content = {
        key: randomKey(),
        url: data
    };
    compress.insert(content, (err) => {
        if (err) console.log(err);
        else {
            console.log("sucess. key: ", content.key);
            res.send(content.key);
        }
    });
};

