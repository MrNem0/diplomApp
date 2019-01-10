import { GET_QUESTIONS, COMMIT_ANSWER } from '../constants';

const initialState = {
  loading: true,
  questions: [],
  currentQuestionIndex: 0,
  answers: []
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
    default:
      return state;
  }
}
