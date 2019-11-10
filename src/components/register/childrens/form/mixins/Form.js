//natives
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

//components
import PrimeiraEtapa from '../childrens/primeiraEtapa/mixins/PrimeiraEtapa';
import SegundaEtapa from '../childrens/segundaEtapa/mixins/SegundaEtapa';
import TerceiraEtapa from '../childrens/terceiraEtapa/mixins/TerceiraEtapa';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: 40
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

var getSteps = () => {
    return ['Dados', 'Escolha de lado', 'Escolha de personagem'];
}

var getStepContent = (step) => {
    switch (step) {
        case 0:
        return 'Informe seus dados';
        case 1:
        return 'Escolha seu lado';
        case 2:
        return 'Escolha seu personagem';
        default:
        return 'Unknown step';
    }
}

export default function Form(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = step => {
    return step === 10;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    props.setState({
        nome: '',
        genero: '',
        tipo: '',
        personagem: ''
    });
  };


  return (
    <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
        <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
                Crie seu personagem e entre na guerra.
            </Typography>
            <Typography component="div">
                <Box fontStyle="italic" m={1}>
                    Que a força esteja com você.
                </Box>
            </Typography>

            <form className={classes.container} noValidate autoComplete="off">
                {activeStep === 0 &&
                    <PrimeiraEtapa {...props}/>
                }
                {activeStep === 1 &&
                    <SegundaEtapa {...props}/>
                }
                {activeStep === 2 &&
                    <TerceiraEtapa {...props}/>
                }
            </form>

            <div className={classes.root}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = <Typography variant="caption">Optional</Typography>;
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                    })}
                </Stepper>
                <div>
                    {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            Personagem: {props.state.personagem}
                            <br/>
                            Bem vindo, {props.state.nome}!
                        </Typography>
                        <Button onClick={handleReset} className={classes.button}>
                        Reiniciar
                        </Button>
                    </div>
                    ) : (
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div>
                        <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                            Voltar
                        </Button>
                        {isStepOptional(activeStep) && (
                            <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSkip}
                            className={classes.button}
                            >
                            Pular
                            </Button>
                        )}

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                        >
                            {activeStep === steps.length - 1 ? 'Finalizar' : 'Proximo'}
                        </Button>
                        </div>
                    </div>
                    )}
                </div>
            </div>

        </Paper>
        </Container>
    </React.Fragment>
  );
}