var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET home page. */
router.get('/new', function(req, res, next) {
  db('addresses').innerJoin('contacts', 'addresses.id', 'contacts.addresses_id').then(joinedTable => {
    res.render('contacts/new', {joinedTable});

  })
});

router.post('/', function(req, res, next) {
  var newContact = {
    first_name: req.body['new-first_name'],
    last_name: req.body['new-last_name'],
    phone_number: req.body['new-phone_number'],
    email_address: req.body['new-email_address'],
    image_url: req.body['new-img_url'],
    addresses_id: req.body['new-address_select']
  }
  console.log(newContact.addresses_id);
  console.log(typeof newContact.addresses_id);
  db('contacts').insert(newContact, '*').then(() => {
    console.log(newContact);
    res.redirect('/')
  })
})

module.exports = router;
