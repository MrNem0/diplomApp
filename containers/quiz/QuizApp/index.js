import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import LinearProgress from '@material-ui/core/LinearProgress';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import { array, bool, number, func } from 'prop-types';
import QuizQuestion from '../QuizQuestion';

export default class QuizApp extends Component {
  state = {
    answerIndex: undefined,
    answer: ''
  };

  handleAnswers = (index, answer) =>
    this.setState({ answerIndex: index, answer });

  handleNextButtonClick = () => {
    this.setState({ answerIndex: undefined, answer: '' });
    this.props.commitAnswers(this.state.answer);
  };

  render() {
    const {
      question,
      progress,
      currentQuestionPosition,
      numberOfQuestions,
      hasNextQuestion
    } = this.props;
    const { answerIndex } = this.state;
    return (
      <Paper style={{ width: '100%', maxWidth: '640px', margin: 'auto' }}>
        <Card>
          <CardHeader
            title="Test for CMM"
            subheader={`Вопрос ${currentQuestionPosition} из ${numberOfQuestions}`}
          />
          <LinearProgress variant="determinate" value={progress} />
          {question && (
            <QuizQuestion
              onAnswers={this.handleAnswers}
              question={question}
              answerIndex={answerIndex}
            />
          )}
          <CardActions>
            <Button onClick={this.handleNextButtonClick}>Далее</Button>
          </CardActions>
        </Card>
      </Paper>
    );
  }
}

QuizApp.propTypes = {
  question: array.isRequired,
  numberOfQuestions: number.isRequired,
  currentQuestionPosition: number.isRequired,
  hasNextQuestion: bool.isRequired,
  progress: number.isRequired,
  commitAnswers: func.isRequired
};
