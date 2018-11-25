const express = require('express');
const childProcess = require('child_process');

const airconRouter = express.Router();

airconRouter.route('/')
    .all(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

airconRouter.route('/powerOn')
    .all(function (req, res, next) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        next();
    })
    .get(function (req, res, next) {
        childProcess.exec('irsend SEND_ONCE aircon on', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });
    });

airconRouter.route('/powerOff')
    .all(function (req, res, next) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        next();
    })
    .get(function (req, res, next) {
        childProcess.exec('irsend SEND_ONCE aircon off', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });
    });


module.exports = airconRouter;