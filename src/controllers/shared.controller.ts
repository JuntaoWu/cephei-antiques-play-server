
import { Request, Response, NextFunction } from "express";
import { IncomingMessage } from 'http';
import * as jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import CryptoJS, { AES, CipherOption } from 'crypto-js';
import { InstanceType } from "typegoose";

import { config } from '../config/config';
import { APIError } from '../helpers/APIError';
import PlayerInfoModel, { PlayerInfo } from '../models/playerinfo.model';

export let load = async (req, res, next) => {
    if (!req.params.unionId) {
        const err = new APIError("unionId not provided", httpStatus.BAD_REQUEST, true);
        return next(err);
    }
    const playerInfo = await PlayerInfoModel.findOne({ unionId: req.params.unionId });
    return res.json({
        code: 0,
        message: "OK",
        data: playerInfo
    });
};

export default { load };