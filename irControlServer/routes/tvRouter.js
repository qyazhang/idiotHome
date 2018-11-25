const express = require('express');
const childProcess = require('child_process');

const tvRouter  = express.Router();

tvRouter.route('/')
    .all(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

tvRouter.route('/powerOn')
    .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
    })
    .get(function(req, res, next){
        childProcess.exec('irsend SEND_ONCE TV on', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });
    });

tvRouter.route('/powerOff')
    .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
    })
    .get(function(req, res, next){
        childProcess.exec('irsend SEND_ONCE TV off', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });
    });


module.exports = tvRouter;