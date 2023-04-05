import { makeAutoObservable } from "mobx";
import { Tcoin } from "../Types/types";
import axios from "axios";
class CryptoList{
List:Tcoin[]=[]
    constructor(){
        makeAutoObservable(this)
    }

 fetchTcoinList=(url:string)=>[
     axios.get(url)
     .then(({data})=>{
        console.log('pass')
        
       
         const coinsArr:Tcoin[]=data.Data.map((item:any)=>{
             const obj:Tcoin={
                 Name: item.CoinInfo.Name,
                 FullName: item.CoinInfo.FullName,
                 ImageUrl: `https://www.cryptocompare.com${item.CoinInfo.ImageUrl}`,
                 PRICE: item.RAW.USD.PRICE.toFixed(2),
                 VOLUME24HOUR: item.RAW.USD.TOTALVOLUME24H.toFixed(2),
                }
                return obj
            })
            console.log(coinsArr)
            this.List=coinsArr
        })
        
    ]   
    

}

export default new CryptoList()