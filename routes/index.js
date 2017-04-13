var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  db('addresses').innerJoin('contacts', 'addresses.id', 'contacts.addresses_id').then(joinedTable => {
    console.log(joinedTable);
    res.render('index', {joinedTable});

  })
});

module.exports = router;
