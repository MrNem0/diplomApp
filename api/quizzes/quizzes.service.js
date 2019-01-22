const db = require('../_helpers/db');

const Quiz = db.Quiz;

async function getQuiz() {
  return await Quiz.find();
}

module.exports = {
  getQuiz
};