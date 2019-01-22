const express = require('express');

const router = express.Router();
const quizService = require('./quizzes.service');

function getAll(req, res, next) {
  quizService
    .getQuiz()
    .then(quiz => res.json(quiz))
    .catch(err => next(err));
}

router.get('/', getAll);

module.exports = router;