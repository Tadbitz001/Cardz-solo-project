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
    .query(`SELECT * FROM profile ORDER by id`)
    .then((result) => {
      res.send(result.rows)
      //console.log('profile.router', results.rows)
    })
    .catch ((error) => {
      console.log('Error in GET for ProfileRouter', error)
      res.sendStatus(500)
    })
    
  });

/**
 * POST route template
 */

router.post('/', (req, res) => {
// POST route code here
    console.log('This is req.body',req.body)
    console.log('This is user:', req.user)
  
    const queryValues = [req.body.first_name, req.body.last_name,
      req.body.user_email, req.body.user_number, req.user.id];
    const queryText = `INSERT INTO "profile"
      ("first_name", "last_name", "user_email", "user_number", "user_id")
      VALUES ($1, $2, $3, $4, $5)`;
    
    pool
      .query(queryText, queryValues)
      .then((result) => {
        res.sendStatus(201);
      })
      .catch((error) => {
        console.log('Error completing profile POST query', error)
        res.sendStatus(500);
      });
});

module.exports = router;