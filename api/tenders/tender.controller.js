const express = require('express');

const router = express.Router();
const tenderService = require('./tender.service');

function register(req, res, next) {
  tenderService
    .create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  tenderService
    .getAll()
    .then(tender => res.json(tender))
    .catch(err => next(err));
}

function getById(req, res, next) {
  tenderService
    .getById(req.params.id)
    .then(tender => (tender ? res.json(tender) : res.sendStatus(404)))
    .catch(err => next(err));
}

function _delete(req, res, next) {
  tenderService
    .delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
}

// routes
router.post('/register', register);
router.get('/', getAll);
router.get('/:id', getById);
router.delete('/:id', _delete);

module.exports = router;
