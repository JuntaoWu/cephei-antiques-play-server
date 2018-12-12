import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';

import playInfoCtrl from '../controllers/playerinfo.controller';

const router = express.Router();

router.get('/', passport.authenticate(["jwtWx"]), playInfoCtrl.load);

router.post('/', passport.authenticate(["jwtWx"]), playInfoCtrl.create);

export default router;
