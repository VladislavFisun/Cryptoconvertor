import {useEffect,useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import '../../App.scss'
import { makeStyles } from '@material-ui/core/styles';
import { Tcoin } from '../Types/types';
import axios from 'axios';
import cryptoList from '../../stores/CryptoList'
import { observer } from 'mobx-react-lite';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    ButtonStyle:{
        margin:' 50px auto',
        textAlign:'center'
      },
  });

 
  
const CryptoList:React.FC=observer(() => {
  const classes = useStyles();
  const [counter,setCounter]=useState(0)
  

      useEffect(()=>{
        cryptoList.fetchTcoinList(`https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?tsym=USD&page=${counter}`)
        console.log(counter)
      },[counter])   
      
  return (
       <div>
     <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>Name</TableCell>
          <TableCell align="right">FullName</TableCell>
          <TableCell align="right">Price</TableCell>
          <TableCell align="right">Volume 24Hour</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {cryptoList.List.map(item=>{
          return(
            <TableRow key={item.Name} className='TableRow'>
            <TableCell component="th" scope="row" >
         <img src={item.ImageUrl} style={{width:"18px",height:'18px',}} alt="" />
    
            </TableCell>
            <TableCell component="th" scope="row" >
         {item.Name}
            </TableCell>
            
            <TableCell align="right"> {item.FullName}</TableCell>
            <TableCell align="right">$ {item.PRICE}</TableCell>
            <TableCell align="right">$ {item.VOLUME24HOUR}</TableCell>
          </TableRow>
          )
        })}
      </TableBody>
    </Table>
  </TableContainer>
  <ButtonGroup className={classes.ButtonStyle} disableElevation variant='outlined' color="primary">
<Button   className='button_next' disabled={counter===0?true:false} onClick={()=>setCounter(counter=>counter-1)}  >back</Button>
<Button  onClick={()=>setCounter(counter=>counter+1)}  >next</Button>
</ButtonGroup>
      </div>
          );
}
)


export default CryptoList;