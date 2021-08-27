const { Router } = require('express');
const router = Router(); 

app.get('/', (req, res) => {
    res.send('success!');
})

module.exports = router;