import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { userReducer } from './user';
import tenderReducer from './tenders';
import quizReducer from './quiz';

const rootReducer = combineReducers({
  user: userReducer,
  quiz: quizReducer,
  tenders: tenderReducer,
  form: formReducer
});

export default rootReducer;
