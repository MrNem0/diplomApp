import React from 'react';
import _ from 'lodash';
import { array, func, node } from 'prop-types';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Radio from '@material-ui/core/Radio';
import blue from '@material-ui/core/colors/blue';

const QuizQuestion = ({ question, answerIndex, onAnswers }) => (
  <CardContent>
    <Typography>{question.text}</Typography>
    <List dense>
      {_.map(question.options, (a, i) => (
        <ListItem
          button
          onClick={() => onAnswers(a,i)}
          key={_.now() * Math.random()}
        >
          <Radio
            value={a}
            checked={answerIndex === i}
            name="radio"
            style={{ color: blue[600] }}
          />
          <ListItemText primary={a} />
        </ListItem>
      ))}
    </List>
  </CardContent>
);

QuizQuestion.propTypes = {
  question: array.isRequired,
  onAnswers: func.isRequired,
  answerIndex: node
};

export default QuizQuestion;
