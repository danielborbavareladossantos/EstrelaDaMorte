import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: 40
  },
  table: {
    minWidth: 200,
  },
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
                    <FormLabel component="legend">Personagem</FormLabel>
                </Grid>
                <RadioGroup 
                    aria-label="personagem" 
                    name="personagem" 
                    value={props.state.personagem} 
                    onChange={(e)=>{props.handleChange('personagem',e)}}
                >
                    {
                        props.state.personagens.map((item, key) =>
                            <Grid container spacing={0} key={key}>
                                {/* Se api fornecer imagem */}
                                {/* <Grid item xs={6}>
                                    <img src={Jedi} alt={'Jedi'} className={classes.imagens}/>
                                </Grid> */}
                                <Grid item key={key} xs={6}>
                                    <FormControlLabel value={item} control={<Radio color="primary" />} label={item} />
                                </Grid>
                            </Grid>
                        )
                    }

                </RadioGroup>
            </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  );
}