var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  db('addresses').innerJoin('contacts', 'addresses.id', 'contacts.addresses_id').then(joinedTable => {
    res.render('index', {joinedTable});

  })
});

router.delete('/:id', (req, res, next) => {
    let id = req.params.id
    db('contacts')
        .where({ id })
        .del()
        .returning('addresses_id')
        .then(addressId => {
            db('contacts')
                .count()
                .where('addresses_id', addressId[0])
                .then(count => {
                    if (count[0].count) {
                        db('addresses')
                            .del()
                            .where('id', addressId[0])
                            .then(() => {
                                res.redirect('/')
                            })
                    }
                    res.redirect('/')
                })
        })
});

module.exports = router;
