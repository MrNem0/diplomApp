import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500]
  }
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit
  }
}))(MuiDialogActions);

class DialogModal extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  dateFormatter = date => {
    const formatter = new Intl.DateTimeFormat('ru');
    return formatter.format(new Date(date));
  };

  render() {
    const { tender } = this.props;
    return (
      <div>
        <Button color="primary" size="small" onClick={this.handleClickOpen}>
          Детальніше
        </Button>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Інформація про тендр
          </DialogTitle>
          <DialogContent>
            <Typography gutterBottom>
              Назва тендеру: {tender.tenderName}
            </Typography>
            <Typography gutterBottom>
              Прикладна область: {tender.area}
            </Typography>
            <Typography gutterBottom>
              Час для розробики (місяці): {tender.duration}
            </Typography>
            <Typography gutterBottom>
              Кількість виконавців: {tender.numberPerformers}
            </Typography>
            <Typography gutterBottom>
              Організаційний підхід: {tender.orgApproach}
            </Typography>
            <Typography gutterBottom>
              Мава(и) для розробки: {tender.language}
            </Typography>
            <Typography gutterBottom>Замовник: {tender.customer}</Typography>
            <Typography gutterBottom>
              Застосовувані стандарти: {tender.standards}
            </Typography>
            <Typography gutterBottom>
              Наявність співвиконаців:{' '}
              {tender.collaborators ? 'Присутні' : 'Відсутні'}
            </Typography>
            <Typography gutterBottom>
              Платформа функціювання: {tender.platform}
            </Typography>
            <Typography gutterBottom>
              Інші вимоги: {tender.otherRequirements}
            </Typography>
            <Typography gutterBottom>
              Дата реєстрації тендеру: {this.dateFormatter(tender.createdDate)}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Закрити
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Підписатись
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default DialogModal;
