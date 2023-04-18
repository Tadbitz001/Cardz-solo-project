const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {rejectUnauthenticated} = require('../modules/authentication-middleware')
/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  pool
  .query(`SELECT * FROM card_info ORDER by id`)
  .then((result) => {
    res.send(result.rows)
    //console.log('card_info router', results.rows)
  })
  .catch ((error) => {
    console.log('Error in get', error)
    res.sendStatus(500)
  })
  
});

//Delete route

router.delete ('/:id', (req, res) => {
  const idItemToDelete = req.params.id;
  console.log('this is idItemToDelete', req.params.id)
  const queryText = `Delete FROM card_info WHERE user_id = $1 AND card_info.user_id = $2`
  const userId = req.user.id;

  pool.query(queryText, [userId, idItemToDelete])
    .then(() => res.sendStatus(200))
    .catch(error => {
      console.log('Error in Delete route', error);
      res.sendStatus(500)
    })
})



/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  console.log('This is req.body',req.body)
  console.log('This is user:', req.user)

  const queryValues = [req.body.contact_name, req.body.contact_business,
    req.body.contact_number, req.body.contact_address, req.body.contact_city, req.body.contact_state,
    req.body.contact_url, req.body.contact_notes, req.body.contact_image, req.user.id];
  const queryText = `INSERT INTO "card_info"
	("contact_name", "contact_business", "contact_number", "contact_address", "contact_city", 
    "contact_state", "contact_url", "contact_notes", "contact_image", "user_id")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`;
  
  pool
    .query(queryText, queryValues)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error completing POST card query', error)
      res.sendStatus(500);
    });
});

module.exports = router;