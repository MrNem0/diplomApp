import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Settings from '@material-ui/icons/Settings';
import Exit from '@material-ui/icons/ExitToApp';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  card: {
    display: 'flex',
    padding: theme.spacing.unit,
    backgroundColor: '#f5f5f5'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  updateInfo: {
  },
  content: {
    flex: '1 0 auto',
  },
  container: {
    margin: theme.spacing.unit * 3
  },
  cover: {
    width: 200,
    height: 200
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
    width: 200
  },
});

function Profile(props) {
  const { classes, theme } = props;

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Avatar
            className={classes.cover}
            src="http://bootdey.com/img/Content/avatar/avatar1.png"
            alt="Live from space album cover"
          />
          <Typography variant="headline">Pylypenko Michael</Typography>
          <Typography variant="subtitle1" color="textSecondary" align="center">
            Programmer
          </Typography>
          <Button variant="raised" color="primary" className={classes.button}>
            Edit profile
            <Settings className={classes.rightIcon} />
          </Button>
          <br />
          <Button variant="raised" color="secondary" className={classes.button}>
            Logout
            <Exit className={classes.rightIcon} />
          </Button>
        </CardContent>
      </div>
      <Grid container spacing={24} justify="center" alignItems="center" className={classes.container}>
        <Grid xs={6}>
          <TextField label="First name" placeholder="First name" />
        </Grid>
        <Grid xs={6}>
          <TextField label="Last name" placeholder="Last name" />
        </Grid>
        <Grid xs={6}>
          <TextField label="Company" placeholder="Company" />
        </Grid>
        <Grid xs={6}>
          <TextField label="County" placeholder="County" />
        </Grid>
        <Grid xs={6}>
          <TextField label="Region" placeholder="Region" />
        </Grid>
        <Grid xs={6}>
          <TextField label="Email address" placeholder="email address" />
        </Grid>
        <Button
          fullWidth
          variant="raised"
          color="default"
        >
          Update
        </Button>
      </Grid>
    </Card>
  );
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Profile);
