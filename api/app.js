const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

// // Load in the mongoose models
const { List, Task } = require('./db/models');


// /*MIDDLEWARE*/

// // Load middleware
app.use(bodyParser.json());

 /* ROUTE HANDLERS */

/* LIST ROUTES */

// /**
//  * GET /lists
//  * Purpose: Get all lists
//  */
app.get('/lists',  (req, res) => {
    // We want to return an array of all the lists that belong to the authenticated user 
    List.find({}).then((lists) => {
        res.send(lists);
    })
})


// /**
//  * POST /lists
//  * Purpose: Create a list
//  */
app.post('/lists',  (req, res) => {
    // We want to create a new list and return the new list document back to the user (which includes the id)
    // The list information (fields) will be passed in via the JSON request body
    let title = req.body.title;

    let newList = new List({
        title
        
    });
    newList.save().then((listDoc) => {
        // the full list document is returned (incl. id)
        res.send(listDoc);
    })
});


/**
 * PATCH /lists/:id
 * Purpose: Update a specified list
 */
app.patch('/lists/:id',  (req, res) => {
    // We want to update the specified list (list document with id in the URL) with the new values specified in the JSON body of the request
   
});


/**
 * DELETE /lists/:id
 * Purpose: Delete a list
 */
app.delete('/lists/:id', (req, res) => {
    // We want to delete the specified list (document with id in the URL)
    
});




app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})