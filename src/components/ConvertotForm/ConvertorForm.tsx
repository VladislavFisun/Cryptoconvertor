import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { InputLabel } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import '../../App.scss';
import CoinList from '../../stores/CryptoList'
import {observer} from 'mobx-react-lite'

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



const ConvertorForm:React.FC = observer(() => {
  const classes = useStyles()
    return (
        <div>
                 <Paper className={classes.paper}>
            <div>
<Grid container spacing={1} style={{alignItems:"center"}}>

    <TextField 
         InputProps= {{  inputProps: {
          pattern: "[0-9]*"
        }}}
     style={{marginRight:'30px'}} 
   />

 
 
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value='12'
               
              >
                {CoinList.List.map(item=>{
                  return(
                      <MenuItem value={item.FullName}>{item.FullName}</MenuItem>
                  )
                })}
              </Select>

              <InputLabel style={{marginLeft:'5%'}} id="demo-simple-select-label">From</InputLabel>
</Grid >
<Grid container spacing={1} style={{alignItems:"center"}}>
  <TextField  style={{marginRight:'30px'}} ></TextField>
 

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value='12'
               
              >
                <MenuItem value={10}>Dollar $</MenuItem>
                
              </Select>

              <InputLabel style={{marginLeft:'5%'}}  id="demo-simple-select-label">To</InputLabel>

 
</Grid >
<Typography style={{marginTop:'20px', textAlign:'left'}}  variant="h6" component="h5">
77.88746 Russian Rubles
</Typography>
            </div>
          </Paper>
        </div>
    );
})

export default ConvertorForm;