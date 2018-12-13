import { Request, Response, NextFunction } from "express";
import express from 'express';

import * as http from "http";
import config from "../config/config";

var validate = require('express-validation');
var paramValidation = require('../config/param-validation');

const router = express.Router();

router.route('/check')
    /** GET /version/check - Get latest version */
    .get((req: Request, res: Response, next: NextFunction) => {

        const hostname = config.service.dashboardHost;
        const port = config.service.dashboardPort;

        // todo: check version.
        var request = http.request({
            hostname: hostname,
            port: port,
            path: `/version/check?appName=${config.service.name}&version=${req.query.version || 0}`,
            method: "GET",
        }, (cepheiRes) => {
            console.log("response from dashboard api.");

            let data = "";
            cepheiRes.on("data", (chunk: ArrayBuffer) => {
                data += chunk;
                console.log("chunk:", chunk);
            });

            cepheiRes.on("end", () => {
                let result = JSON.parse(data);
                console.log("result:", result);
                res.json(result);
            });
        });

        request.end();

        request.on("error", (data) => {
            res.json({
                error: true,
                message: data.message,
                data: {
                    hasUpdate: false
                }
            })
        });
    });

export default router;
