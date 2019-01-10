import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { array, number, bool, func } from 'prop-types';

import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getQuestions, commitAnswer } from '../../actions/quizActions';
import QuizApp from './QuizApp';
import QuizResult from './QuizResults';

import './index.scss';

class Quiz extends Component {
  componentDidMount() {
    this.props.getQuestions();
  }

  render() {
    const {
      question,
      quizProgress,
      currentQuestionPosition,
      numberOfQuestions,
      hasNextQuestion,
      commitAnswer,
      loading
    } = this.props;
    if (loading) return <CircularProgress />;
    return (
      <main>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ height: '100vh', width: '100%', display: 'flex' }}
        >
          {question ? (
            <QuizApp
              question={question}
              numberOfQuestions={numberOfQuestions}
              currentQuestionPosition={currentQuestionPosition}
              hasNextQuestion={hasNextQuestion}
              progress={quizProgress}
              commitAnswers={commitAnswer}
            />
          ) : (
            <QuizResult />
          )}
        </Grid>
      </main>
    );
  }
}

Quiz.propTypes = {
  question: array.isRequired,
  numberOfQuestions: number.isRequired,
  currentQuestionPosition: number.isRequired,
  hasNextQuestion: bool.isRequired,
  quizProgress: number.isRequired,
  getQuestions: func.isRequired,
  commitAnswer: func.isRequired,
  loading: bool.isRequired
};

const mapStateToProps = store => {
  const question = store.quiz.questions[store.quiz.currentQuestionIndex];
  const numberOfQuestions = store.quiz.questions.length;
  const currentQuestionPosition = store.quiz.currentQuestionIndex + 1;
  const hasNextQuestion =
    store.quiz.currentQuestionIndex < store.quiz.questions.length;
  const quizProgress = (currentQuestionPosition / numberOfQuestions) * 100;
  return {
    question,
    numberOfQuestions,
    currentQuestionPosition,
    hasNextQuestion,
    quizProgress,
    loading: store.quiz.loading
  };
};

const mapDispatchToProps = dispatch => ({
  getQuestions: bindActionCreators(getQuestions, dispatch),
  commitAnswer: bindActionCreators(commitAnswer, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
