import React from 'react';
import { object } from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { getTenders } from '../actions/tenderActions';

import DialogModal from './Dialog';

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
    padding: `${theme.spacing.unit * 3}px`,
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

class TenderList extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClickClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    this.props.getTenders();
  }

  render() {
    const { classes, tenders } = this.props;
    return (
      <React.Fragment>
        <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
          Перед тим як підписуваться на чийсь тендер радимо вам спочатку пройти наш тест
        </Typography>
        <Paper className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40}>
            {tenders.map(tender => (
              <Grid item key={tender.id} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={tender.previewImage} // eslint-disable-line max-len
                    title={tender.tenderName}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="subtitle1" component="h5">
                      {tender.tenderName}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <DialogModal tender={tender} />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </React.Fragment>
    );
  }
}

TenderList.propTypes = {
  classes: object.isRequired
};

const mapStateToProps = store => ({
  tenders: store.tenders.tenders
});

const mapDispatchToProps = dispatch => ({
  getTenders: bindActionCreators(getTenders, dispatch)
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TenderList)
);
