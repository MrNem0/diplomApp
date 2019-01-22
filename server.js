const express = require('express');
const next = require('next');
const cors = require('cors');
const bodyParser = require('body-parser');
// const jwt = require('./api/_helpers/jwt');
const errorHandler = require('./api/_helpers/error-handler');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const quiz = require('./quiz.json');

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());
    server.use(cors());
    // server.use(jwt());
    server.use('/users', require('./api/users/user.controller'));
    server.use('/quizzes', require('./api/quizzes/quizzes.controller'));
    server.use('/tender', require('./api/tenders/tender.controller'));
    server.use(errorHandler);

    server.get('/api/quiz', (req, res) => {
      setTimeout(() => res.json({ ok: true, quiz }), 1000);
    });

    server.post('/api/quiz', (req, res) => {
      const { answers } = req.body;
      const count = answers.reduce((sum, current) => sum + current, 0);
      const sum = ((count / quiz.length) * 100).toFixed(1);
      const results = {
        correct: +sum,
        incorrect: 100 - sum,
        total: quiz.length
      };
      setTimeout(() => res.json({ ok: true, results }), 1000);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
