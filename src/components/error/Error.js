import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 400,
    width: 600,
    marginTop:200
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function ErrorComponent() {
  const classes = useStyles();

  const [spacing] = React.useState(2);

  return (
    <div className={classes.root}>
      <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          <Paper className={classes.paper} align="center">
            <br/><br/><br/><br/>
            <img src="broke.jpg" alt="Erro" width="100"/>
            <br/><br/>
            <Typography variant="h5" component="h2">
              Opps, ocorreu um erro.
            </Typography>
            <br/><br/>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
               Caso essa mensagem persistir comunique o suporte.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
    </div>
  );
}

export default class Error extends Component {
  
  render() {
    return <ErrorComponent/>;
  }
}