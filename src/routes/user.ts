import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';

import wxUserCtrl from '../controllers/wxuser.controller';

const router = express.Router();

router.post('/login-wxgame', passport.authenticate(["jwtWx", "localWxGame"]), wxUserCtrl.loginWxGame);

router.post('/login-native', passport.authenticate(["jwtWx", "localNative"]), wxUserCtrl.loginNative);

router.post('/authorize-wxgame', wxUserCtrl.authorizeWxGame);

export default router;
