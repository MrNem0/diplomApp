const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const quiz = require('./quiz.json');

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/api/quiz', (req, res) => {
      setTimeout(() => res.json({ ok: true, quiz }), 1000);
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
