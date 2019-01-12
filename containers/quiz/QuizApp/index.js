import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import { array, bool, number, func } from 'prop-types';
import QuizQuestion from '../QuizQuestion';

export default class QuizApp extends Component {
  state = {
    answerIndex: undefined,
    answer: 0
  };

  handleAnswers = (answer, index) => {
    switch (answer) {
      case 'Майже завжди':
        this.setState({ answerIndex: index, answer: 1 });
        break;
      case 'Часто':
        this.setState({ answerIndex: index, answer: 0.75 });
        break;
      case 'Іноді':
        this.setState({ answerIndex: index, answer: 0.5 });
        break;
      case 'Рідко':
        this.setState({ answerIndex: index, answer: 0.25 });
        break;
      case 'Ніколи':
        this.setState({ answerIndex: index, answer: 0 });
        break;
      default:
        return null;
    }
  };

  // handleAnswers = (index, answer) =>
  //   this.setState({ answerIndex: index, answer });

  handleNextButtonClick = () => {
    this.setState({ answerIndex: undefined, answer: 0 });
    this.props.commitAnswers(this.state.answer);
  };

  handleCompleteButtonClick = () => {
    this.props.onComplete();
  };

  render() {
    const {
      question,
      progress,
      currentQuestionPosition,
      numberOfQuestions,
      hasNextQuestion,
    } = this.props;
    const { answerIndex } = this.state;
    return (
      <Paper style={{ width: '100%', mixWidth: '640px', margin: 'auto', maxHeight: '100vh' }}>
        <Card>
          <Typography variant="h5" component="h5" align="center">
            Test for CMM
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" align="center">
            {hasNextQuestion &&
              `Вопрос ${currentQuestionPosition} из ${numberOfQuestions}`}
          </Typography>
          <LinearProgress variant="determinate" value={progress} />
          {question && (
            <QuizQuestion
              onAnswers={this.handleAnswers}
              question={question}
              answerIndex={answerIndex}
            />
          )}
          <CardActions>
            {hasNextQuestion ? (
              <Button onClick={this.handleNextButtonClick}>Далі</Button>
            ) : (
              <Button onClick={this.handleCompleteButtonClick} fullWidth>
                Закінчити
              </Button>
            )}
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
  commitAnswers: func.isRequired,
  onComplete: func.isRequired
};
