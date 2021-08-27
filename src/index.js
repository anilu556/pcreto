const express = require('express');
const app = express();
const morgan = require('morgan');

//Connect to BD
const mongoose = require('mongoose');

const user = 'anapc';
const password = 'nytyUW6sbHgZADXt';
const dbname = 'pcreto'
const uri = `mongodb+srv://anapc:${password}@cluster0.ewlxg.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri)
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log(e))


//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use('/api/users', require('./routes/users'));

//server
app.listen(app.get('port'), () => {
     console.log(`Server on port ${app.get('port')}`);
})