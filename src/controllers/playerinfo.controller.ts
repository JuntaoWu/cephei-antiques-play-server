
import { Request, Response, NextFunction } from "express";
import { IncomingMessage } from 'http';
import * as jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import CryptoJS, { AES, CipherOption } from 'crypto-js';
import { InstanceType } from "typegoose";

import { config } from '../config/config';
import { APIError } from '../helpers/APIError';
import PlayerInfoModel, { PlayerInfo } from '../models/playerinfo.model';

export let load = async (req, res, next: any) => {
    let playerInfo = await PlayerInfoModel.findOne({ unionId: req.user.unionId });

    return res.json({
        code: 0,
        message: "OK",
        data: playerInfo
    });
};

export let create = async (req, res, next) => {
    let playerInfo = await PlayerInfoModel.findOne({ unionId: req.user.unionId });

    if (!playerInfo) {
        playerInfo = new PlayerInfoModel(req.body);
        playerInfo.unionId = req.user.unionId;
    }
    else {
        playerInfo.plotId = req.body.plotId;
        playerInfo.collectedScenes = req.body.collectedScenes;
        playerInfo.fatigueValue = req.body.fatigueValue;
        playerInfo.gold = req.body.gold;
        playerInfo.lastEntryTime = req.body.lastEntryTime;
        playerInfo.hints = req.body.hints;
        playerInfo.time = req.body.time;
        playerInfo.guPrice = req.body.guPrice;
        playerInfo.guColl = req.body.guColl;
        playerInfo.guEventList = req.body.guEventList;
        playerInfo.sound = req.body.sound;
        playerInfo.music = req.body.music;
        playerInfo.isManage = req.body.isManage;
        playerInfo.isShowGuide = req.body.isShowGuide;
        playerInfo.ending = req.body.ending;
        playerInfo.pointHunag = req.body.pointHunag;
        playerInfo.pointMu = req.body.pointMu;
    }
    await playerInfo.save();

    return res.json({
        code: 0,
        message: "OK",
        data: playerInfo
    });
};

export default { load, create };