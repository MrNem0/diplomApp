import React from 'react';
import Link from 'next/link';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    position: 'relative'
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

class Home extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    this.setState({ user: window.localStorage.getItem('user') })
  }

  render() {
    const { classes } = this.props;
    const { user } = this.state;
    console.log(user)
    return (
      <React.Fragment>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          TenderQuiz
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Вітаю на Веб-сервісі який допаможе вам знайти потрібний тендер для
          розробки Або залишити інформацію про свій тендер
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          paragraph
        >
          Щоб використати всі можновості веб-сервісу для початку зараєствуютесь,
          гарантуємо захист ваших даних
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={16} justify="center">
            <Grid item>
              <Link href="/quiz">
                <Button variant="contained" color="primary" disabled={!user}>
                  Пройти тест
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/tenders">
                <Button variant="outlined" color="primary" disabled={!user}>
                  Список тендерів
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Home);
