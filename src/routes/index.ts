import express from 'express';
var router = express.Router();

import userRouter from './user';

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.use('/users', userRouter);

export default router;
