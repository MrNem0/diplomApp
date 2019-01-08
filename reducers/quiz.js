import { GET_QUESTIONS } from '../constants';

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  answers: []
};

export default function quizReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: payload
      };
    default:
      return state;
  }
}
