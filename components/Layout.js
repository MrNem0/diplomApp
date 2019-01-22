import React from 'react';
import classNames from 'classnames';
import { object } from 'prop-types';
import Link from 'next/link';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Exit from '@material-ui/icons/ExitToApp';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  appBar: {
    position: 'relative'
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarLogo: {
    marginRight: theme.spacing.unit * 2
  },
  rightIcon: {
    marginRight: theme.spacing.unit * 2,
  },
  layout: {
    width: 'auto',
    padding: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    minHeight: '85vh'
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2
  },
  buttonNav: {
    margin: `${theme.spacing.unit}px ${theme.spacing.unit}px`
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2
    }
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`
  }
});

const footers = [
  {
    title: 'All right reserved',
    description: ['Develop by Pylypenko Michael']
  },
  {
    title: 'Resources',
    description: ['React', 'Redux', 'Material UI', 'Brain']
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use']
  }
];

class Layout extends React.Component {
  state = {
    anchorEl: null,
    user: ''
  };

  componentDidMount() {
    this.setState({ user: window.localStorage.getItem('user') });
  }

  componentWillUnmount() {
    this.setState({ user: '' });
  }

  handleLogout = () => {
    window.localStorage.removeItem('user');
    this.setState({ anchorEl: null, user: '' });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, children } = this.props;
    const { user, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" color="default" className={classes.appBar}>
          <Toolbar>
            <Avatar
              src="/static/logo.png"
              alt="logo"
              className={classes.toolbarLogo}
            />
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              TenderQuiz
            </Typography>
            <Link href="/">
              <Button className={classes.buttonNav}>Головна</Button>
            </Link>
            <Link href="/tenders">
              <Button className={classes.buttonNav}>Список тендерів</Button>
            </Link>
            {user && (
              <Link href="/registrationtender">
                <Button className={classes.buttonNav}>
                  Регістрація тендеру
                </Button>
              </Link>
            )}
            {user && (
              <Link href="/quiz">
                <Button className={classes.buttonNav}>Пройти тест</Button>
              </Link>
            )}
            <Link href="/about">
              <Button className={classes.buttonNav}>Про нас</Button>
            </Link>
            <Link href="/support">
              <Button className={classes.buttonNav}>Допомога</Button>
            </Link>
            {user ? (
              <React.Fragment>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <Avatar src="http://bootdey.com/img/Content/avatar/avatar1.png" />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <Link href="/profile">
                    <MenuItem onClick={this.handleClose} style={{width: "120px"}}>
                      <AccountCircle className={classes.rightIcon}/>
                      Profile
                    </MenuItem>
                  </Link>
                  <MenuItem onClick={this.handleLogout} style={{width: "120px"}}>
                    <Exit className={classes.rightIcon} />
                    Logout
                  </MenuItem>
                </Menu>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link href="/signin">
                  <Button
                    className={classes.buttonNav}
                    color="primary"
                    variant="outlined"
                  >
                    Sign in
                  </Button>
                </Link>
              </React.Fragment>
            )}
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          {/* Hero unit */}
          <div>{children}</div>
          {/* End hero unit */}
        </main>
        {/* Footer */}
        <footer className={classNames(classes.footer, classes.layout)}>
          <Grid container spacing={32} justify="space-evenly">
            {footers.map(footer => (
              <Grid item xs key={footer.title}>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  {footer.title}
                </Typography>
                {footer.description.map(item => (
                  <Typography
                    key={item}
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    {item}
                  </Typography>
                ))}
              </Grid>
            ))}
          </Grid>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

Layout.propTypes = {
  classes: object.isRequired,
  children: object.isRequired
};

export default withStyles(styles)(Layout);
