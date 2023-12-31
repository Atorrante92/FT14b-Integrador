const login = require('../controllers/login');
const { getCharById } = require('../controllers/getCharById');
const postUser = require('../controllers/postUser');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');

//const { postFav, deleteFav } = require('../controllers/handleFavorites');

// const express = require('express');
// const router = express.Router();
// Las 2 líneas anteriores se reemplazan por:
const router = require('express').Router();

router.get('/character/:id', (req, res) => {
  getCharById(req, res);
});

router.get('/login', login);

router.post('/login', postUser);

router.post('/fav', (req, res) => {
  postFav(req, res);
});

router.delete('/fav/:id', (req, res) => {
  deleteFav(req, res);
});

module.exports = router;

