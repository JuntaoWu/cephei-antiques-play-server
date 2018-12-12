import express from 'express';
var router = express.Router();

import userRouter from './user';

import playerinfoRouter from './playerinfo';

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.use('/users', userRouter);

router.use('/playerinfo', playerinfoRouter);

export default router;
