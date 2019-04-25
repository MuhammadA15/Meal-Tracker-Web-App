var express = require('express');
var indexRouter = express.Router();

const loginRouter = require('./loginRouter');
const signupRouter = require('./signupRouter');
const homeRouter = require('./homeRouter');
const getlogRouter = require('./getlogRouter');
const addlogRouter = require('./addlogRouter');
const updatelogRouter = require('./updatelogRouter');
const deletelogRouter = require('./deletelogRouter');

//Route requests
indexRouter.use('/login', loginRouter); 
indexRouter.use('/signup', signupRouter);
indexRouter.use('/home', homeRouter);
indexRouter.use('/get_log', getlogRouter);
indexRouter.use('/add_log', addlogRouter);
indexRouter.use('/update_log', updatelogRouter);
indexRouter.use('/delete_log', deletelogRouter);

/* GET home page. */
indexRouter.get('/', function(req, res, next) {

  console.log("Homepage Accessed");
});



module.exports = indexRouter;