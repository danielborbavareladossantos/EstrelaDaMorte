import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';

import Man from '../../../../../../../assets/man.png';
import Woman from '../../../../../../../assets/woman.png';

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

export default function PrimeiraEtapa(props) {
    const classes = useStyles();
    
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
            <Paper className={classes.root}>
                <TextField
                    id="standard-basic"
                    className={classes.textField}
                    label="Digite seu nome"
                    margin="normal"
                    value={props.state.nome}
                    onChange={(e)=>{props.handleChange('nome',e)}}
                />
                
                <Grid container spacing={0}>
                    <Grid container spacing={0}>
                        <FormLabel component="legend">Genero</FormLabel>
                    </Grid>
                    <RadioGroup 
                        aria-label="genero" 
                        name="genero" 
                        value={props.state.genero} 
                        onChange={(e)=>{props.handleChange('genero',e)}}
                    >
                        <Grid container spacing={0}>
                            <Grid item xs={6}>
                                <img src={Man} alt={'Homem'} className={classes.imagens}/>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel value="female" control={<Radio color="primary" />} label="Femenino" />
                            </Grid>
                        </Grid>

                        <Grid container spacing={0}>
                            <Grid item xs={6}>
                                <img src={Woman} alt={'Homem'} className={classes.imagens}/>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel value="male" control={<Radio color="primary" />} label="Masculino" />
                            </Grid>
                        </Grid>

                    </RadioGroup>
                </Grid>

            </Paper>
            </Container>
        </React.Fragment>
    );
}