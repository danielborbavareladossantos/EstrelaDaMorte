import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';

import Jedi from '../../../../../../../assets/jedi.png';
import Sith from '../../../../../../../assets/sith.png';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: 40
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(3),
    width: '100%',
  },
  imagens: {
      width: '30px',
      height: '30px'
  }
}));

export default function SegundaEtapa(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Paper className={classes.root}>
            <Grid container spacing={0}>
                <Grid container spacing={0}>
                    <FormLabel component="legend">Tipo</FormLabel>
                </Grid>
                <RadioGroup 
                    aria-label="tipo" 
                    name="tipo" 
                    value={props.state.tipo} 
                    onChange={(e)=>{props.handleChange('tipo',e)}}
                >
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <img src={Jedi} alt={'Jedi'} className={classes.imagens}/>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel value="jedi" control={<Radio color="primary" />} label="Jedi" />
                        </Grid>
                    </Grid>

                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <img src={Sith} alt={'Sith'} className={classes.imagens}/>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel value="sith" control={<Radio color="primary" />} label="Sith" />
                        </Grid>
                    </Grid>

                </RadioGroup>
            </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  );
}