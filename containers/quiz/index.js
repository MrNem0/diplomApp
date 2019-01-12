import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { array, number, bool, func, object } from 'prop-types';

import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
  getQuestions,
  commitAnswer,
  getResults,
  endQuiz
} from '../../actions/quizActions';
import QuizApp from './QuizApp';
import QuizResult from './QuizResults';

import './index.scss';

class Quiz extends Component {
  componentDidMount() {
    this.props.getQuestions();
  }

  handleComplete = () => {
    this.props.endQuiz();
    this.props.getResults(this.props.answers);
  };

  handleAnswers = answer => {
    this.props.commitAnswer(answer);
  };

  render() {
    const {
      question,
      quizProgress,
      currentQuestionPosition,
      numberOfQuestions,
      hasNextQuestion,
      loading,
      results
    } = this.props;
    return (
      <main>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ minHeight: '85vh', width: '100%', display: 'flex' }}
        >
          {loading ? (
            <CircularProgress />
          ) : results ? (
            <QuizResult results={results} />
          ) : (
            <QuizApp
              question={question}
              numberOfQuestions={numberOfQuestions}
              currentQuestionPosition={currentQuestionPosition}
              hasNextQuestion={hasNextQuestion}
              progress={quizProgress}
              commitAnswers={this.handleAnswers}
              onComplete={this.handleComplete}
            />
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
  loading: bool.isRequired,
  results: object.isRequired,
  getResults: func.isRequired,
  answers: array.isRequired,
  endQuiz: func.isRequired
};

const mapStateToProps = store => {
  const question = store.quiz.questions[store.quiz.currentQuestionIndex];
  const numberOfQuestions = store.quiz.questions.length;
  const currentQuestionPosition = store.quiz.currentQuestionIndex + 1;
  const hasNextQuestion =
    store.quiz.currentQuestionIndex < store.quiz.questions.length;
  const quizProgress = (currentQuestionPosition / numberOfQuestions) * 100;
  return {
    answers: store.quiz.answers,
    results: store.quiz.results,
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
  commitAnswer: bindActionCreators(commitAnswer, dispatch),
  getResults: bindActionCreators(getResults, dispatch),
  endQuiz: bindActionCreators(endQuiz, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
