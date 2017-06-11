'use strict';
const couch = require('./couchdb');

exports.create = () => {
    couch.db.create('compress', (err, body) => { 
           if (err) console.log(err);
           else console.log(body);
       });
}

exports.destroy = () => {
    couch.db.destroy('compress', (err) => {
        if (err) console.log(err);
        else console.log('Successful deletion');
    });
}

exports.insert = (data, cb) => {
    const key = data['key']
    couch.db.use('compress').insert(data, key, (err, body) => {
        cb(err);
    });
}

exports.retrieve = (data, cb) => {
    couch.db.use('compress').get(data, (err, results) => {
        console.log('results: ' + results);
        cb(err, results);
    });
}
