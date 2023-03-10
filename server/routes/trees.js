// Instantiate router - DO NOT MODIFY
const express = require('express');
const router = express.Router();
require('dotenv').config();
/**
 * BASIC PHASE 2, Step A - Instantiate SQLite and database
 *   - Database file: "data_source" environment variable
 *   - Database permissions: read/write records in tables
 */
// Your code here
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(
    process.env.DATA_SOURCE,
    sqlite3.OPEN_READWRITE
)
/**
 * BASIC PHASE 2, Step B - List of all trees in the database
 *
 * Protocol: GET
 * Path: /
 * Parameters: None
 * Response: JSON array of objects
 *   - Object properties: height-ft, tree, id
 *   - Ordered by the height_ft from tallest to shortest
 */
// Your code here
router.get('/', (req, res, next) => {
    const sql = 'SELECT * FROM trees';
    const params = [];

    db.all(sql, params, (err, rows) => {
        res.json(rows);
    });
});
/**
 * BASIC PHASE 3 - Retrieve one tree with the matching id
 *
 * Path: /:id
 * Protocol: GET
 * Parameter: id
 * Response: JSON Object
 *   - Properties: id, tree, location, height_ft, ground_circumference_ft
 */
// Your code here
router.get('/:id', (req, res, next) => {
    /**
     * STEP 2A - SQL Statement
     */
    // Your code here
    const sql = 'SELECT * FROM trees WHERE id = ?'
    /**
     * STEP 2B - SQL Parameters
     */
    // Your code here
    const params = [req.params.id]
    /**
     * STEP 2C - Call database function
     *  - return response
     */
    // Your code here
    db.get(sql, params, (err, row) => {
        if (err) next(err)
        else res.json(row)
    })
});
/**
 * INTERMEDIATE PHASE 4 - INSERT tree row into the database
 *
 * Path: /trees
 * Protocol: POST
 * Parameters: None
 * Response: JSON Object
 *   - Property: message
 *   - Value: success
 */
// Your code here

/**
 * INTERMEDIATE PHASE 5 - DELETE a tree row from the database
 *
 * Path: /trees/:id
 * Protocol: DELETE
 * Parameter: id
 * Response: JSON Object
 *   - Property: message
 *   - Value: success
 */
// Your code here

/**
 * INTERMEDIATE PHASE 6 - UPDATE a tree row in the database
 *
 * Path: /trees/:id
 * Protocol: PUT
 * Parameter: id
 * Response: JSON Object
 *   - Property: message
 *   - Value: success
 */
// Your code here

// Export class - DO NOT MODIFY
module.exports = router;