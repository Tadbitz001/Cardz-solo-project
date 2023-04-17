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

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;