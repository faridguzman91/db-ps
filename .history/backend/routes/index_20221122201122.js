// const express = require('express');
// const router = express.Router();
// const auth = require('./auth');
// const createError = require('http-errors')

import express from 'express';
import createError from 'http-errors';
import auth from './auth';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});
router.use('/auth', auth);
router.use(async(req, res, next) => {
    next(createError.NotFound('Route not Found'))
})
router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        status: false,
        message: err.message
    })
})


module.exports = routes;