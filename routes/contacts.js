var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET New Contact Form. */
router.get('/new', function(req, res, next) {
    db('addresses').innerJoin('contacts', 'addresses.id', 'contacts.addresses_id').then(joinedTable => {
      db('addresses').then(existingAddresses => {
        res.render('contacts/new', { joinedTable, existingAddresses });
      })
    })
});

// GET individual contact

// POST new contact //
router.post('/new', function(req, res, next) {
    var newAddress = {
        line_1: req.body['new-line_1'],
        line_2: req.body['new-line_2'],
        city: req.body['new-city'],
        zip: req.body['new-zip']
    }
    var newContact = {
        first_name: req.body['new-first_name'],
        last_name: req.body['new-last_name'],
        phone_number: req.body['new-phone_number'],
        email_address: req.body['new-email_address'],
        image_url: req.body['new-img_url']
    }

    db('addresses').innerJoin('contacts', 'addresses.id', 'contacts.addresses_id').then(joinedTable => {
        db('addresses').then((existingAddresses) => {

      // Validation: Does Address already exist?
            for (element of existingAddresses) {
                if (element.line_1 === newAddress.line_1 && element.line_2 === newAddress.line_2) {
                    console.log('existing, Reject');
                    return res.render('contacts/new', { error: 'Address already exists.', joinedTable, existingAddresses })
                }
            }

      // Validation: Is any input data null / empty / undefined?
            for (key in newContact) {
              if (newContact[key] === '' || newContact[key] === null || newContact[key] === undefined) {
                return res.render('contacts/new', { error: 'Fill in all fields.', existingAddresses })
              }
            }

        // Update Table: Contacts -- If selecting already existing address
              if (req.body['new-address_select'] !== 'create') {
                  newContact.addresses_id = req.body['new-address_select']
                  db('contacts').insert(newContact, '*').then(() => {
                      res.redirect('/')
                  })
              } else {
          // Validation: Entering new address - Is any input data null / empty / undefined (excluding Address Line 2)
                if (!newAddress.line_1 || !newAddress.city || !newAddress.zip) {
                  return res.render('contacts/new', { error: 'Fill in all fields.', existingAddresses })
                }
                  db('addresses').insert(newAddress, '*').then((data) => {
                      newContact.addresses_id = data[0].id
                      db('contacts').insert(newContact, '*').then(() => {
                          res.redirect('/')
                      })
                  })
              }
        })
    })
})

module.exports = router;
