const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {rejectUnauthenticated} = require('../modules/authentication-middleware')

/**
 * GET route template
 */
router.get('/:cardsearch', rejectUnauthenticated, (req, res) => {
    // GET route code here
    const queryText = `SELECT * FROM card_info WHERE user_id =$1 AND contact_business ILIKE $2`
    const queryValues = [req.user.id, `%${req.params.cardsearch}%`]
    pool
    .query(queryText, queryValues)
    .then((result) => {
      res.send(result.rows)
      //console.log('profile.router', results.rows)
    })
    .catch ((error) => {
      console.log('Error in GET for ProfileRouter', error)
      res.sendStatus(500)
    })
    
  });





module.exports = router;