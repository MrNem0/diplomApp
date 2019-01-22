import { GET_TENDER } from '../constants';
import Axios from 'axios';

export const getTenders = () => dispatch => {
  const res = Axios.get('/tender').then(r => r.data);
  return res.then(data => dispatch({ type: GET_TENDER, payload: data }));
}
