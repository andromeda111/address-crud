var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  db('addresses').innerJoin('contacts', 'addresses.id', 'contacts.addresses_id').then(joinedTable => {
    res.render('index', {joinedTable});

  })
});

/* DELETE contact */
router.delete('/:id', function(req, res, next) {
  console.log(req.body);
  var id = req.params.id
  console.log(id + 'id');
  var asdf = req.addresses_id
  console.log(asdf + 'asdf');
  db('contacts').del().where({id}).then((data) => {
    console.log(data + "data");
    //
    // db('addresses').del().where({id}, {asdf}).then(() => {
    //   db('addresses').innerJoin('contacts', 'addresses.id', 'contacts.addresses_id').then(joinedTable => {
    //     res.render('index', {joinedTable});
    //   })
    // })
  })
});

module.exports = router;
