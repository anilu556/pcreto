const { Router } = require('express');
const router = Router(); 

const User = require('../models/user')

router.get('/', async (req, res) => {
   
    User
    .find()
    .exec()
    .then(users => {
        res.json({
            users,
            Total: users.length
        })
        .status(200)
    })
    console.log(`Caught error: ${err}`);
    return res.status(500).json(err)
})

module.exports = router;

