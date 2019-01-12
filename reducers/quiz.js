import {
  GET_QUESTIONS,
  COMMIT_ANSWER,
  GET_RESULTS,
  END_QUIZ
} from '../constants';

const initialState = {
  loading: true,
  questions: [],
  currentQuestionIndex: 0,
  answers: [],
  results: null
};

export default function quizReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: payload,
        loading: false
      };
    case COMMIT_ANSWER:
      return {
        ...state,
        answers: [...state.answers, payload],
        currentQuestionIndex: state.currentQuestionIndex + 1
      };
    case END_QUIZ:
      return {
        ...state,
        loading: true
      };
    case GET_RESULTS:
      return {
        ...state,
        results: payload,
        loading: false
      };
    default:
      return state;
  }
}
