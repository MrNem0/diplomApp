import { combineReducers } from 'redux';
import { pageReducer } from './page';
import { userReducer } from './user';
import quizReducer from './quiz';

const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
  quiz: quizReducer
});

export default rootReducer;
