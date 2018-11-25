const express = require('express');
const childProcess = require('child_process');
const mongoose = require('mongoose');

const Records = require('../recordSchema/homeRecords');

const lightRouter  = express.Router();

lightRouter.route('/')
    .all(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

lightRouter.route('/powerOn')
    .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
    })
    .get(function(req, res, next){
        childProcess.exec('irsend SEND_ONCE light on', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            Records.create({
                location: 'main bedroom',
                action: 'turn on the light'
            }, function (err, records) {
                if (err) throw err;
                console.log('your action has been recorded')
            });
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });
    });

lightRouter.route('/powerOff')
    .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
    })
    .get(function(req, res, next){
        childProcess.exec('irsend SEND_ONCE light off', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            Records.create({
                location: 'main bedroom',
                action: 'turn off the light'
            }, function (err, records) {
                if (err) throw err;
                console.log('your action has been recorded')
            });
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });
    });

lightRouter.route('/sixty')
    .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
    })
    .get(function(req, res, next){
        childProcess.exec('irsend SEND_ONCE light sixty', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });
    });

lightRouter.route('/thirty')
    .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
    })
    .get(function(req, res, next){
        childProcess.exec('irsend SEND_ONCE light thirty', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });
    });


module.exports = lightRouter;