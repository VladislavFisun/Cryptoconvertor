import {useState} from 'react';
import Container from '@material-ui/core/Container';
import { Tcoin } from './Types/types';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import './App.scss';
import ConvertorForm from './components/ConvertotForm/ConvertorForm';
import { CryptoList } from './components';

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectLabel:{
    marginLeft:'5px'
  },
  table: {
    minWidth: 650,
  },
  ButtonStyle:{
    margin:' 50px auto',
    textAlign:'center'
  },
  disabledButton:{
    opacity:.5
  },

  
}),
);

function App() {
  const classes = useStyles();
  const [coin,setCoin] = useState<Tcoin[]>([])


  return (
<div className={classes.root}>
<Container  maxWidth="lg" >
<Grid container spacing={10}>
        <Grid item xs={8}>
          <CryptoList />
        </Grid>
        <Grid item xs={4}>
        <ConvertorForm />
        </Grid>
    
      </Grid>
</Container>+
 

</div>
  );
}

export default App;
