import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Radio from '@material-ui/core/Radio';
import blue from '@material-ui/core/colors/blue';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getQuestions } from '../../actions/quizActions';

import './index.scss';

class Index extends Component {
  componentDidMount() {
    this.props.getQuestions();
  }

  render() {
    const { question } = this.props;
    if (!question) return <CircularProgress />;
    return (
      <main>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ height: '100vh', width: '100%', display: 'flex' }}
        >
          <Paper style={{ width: '100%', maxWidth: '640px', margin: 'auto' }}>
            <Card>
              <CardHeader title="Test for CMM" subheader="Ask 1 with 5" />
            </Card>
            <LinearProgress variant="determinate" value={25} />
            <CardContent>
              <Typography>{question.text}</Typography>
              <List dense>
                {question.options.map((a,i) => (
                  <ListItem button key={i}>
                    <ListItemText primary={a} />
                    <Radio value={a} name="radio" style={{ color: blue[600] }} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Paper>
        </Grid>
      </main>
    );
  }
}

const mapStateToProps = store => {
  const question = store.quiz.questions[store.quiz.currentQuestionIndex];
  return {
    question
  };
};

const mapDispatchToProps = dispatch => ({
  getQuestions: bindActionCreators(getQuestions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
