const express = require('express');
const Books = require('../models/book.model');
const router = express.Router();

router.get('/books', (req, res) =>{
    Books.find()
    .then(response =>{
        res.json ( {response } )
    })
    .catch(err => {
        res.json ({
            message : "An error Ocurred!"
        })
    })
});
router.get('/books/count', async(req, res) => {
     let count  = await Books.countDocuments({ "_id": { "$exists": true } });
     res.json({count });
})
router.get('/books/:id', (req, res) =>
{
    const bookID = req.params.id;
    Books.findById(bookID)
    .then(response => {
        res.json({ response })
    })
    .catch(err => {
        res.json ({
            message : "An error Ocurred!"
        })
    });
})

router.post('/books', async(req, res) =>{
    const newBook = new Books ({ 
        title : req.body.title,
        name : req.body.name,
        author : req.body.author,
        category : req.body.category,
        })
    newBook.save()
    .then(response => {
        res.json({
            message : "Employee Added Successfuly"
        })
    })
    .catch(err => {
        res.json({
            message : 'An error occurred!'
        })
    })
})



module.exports = router;