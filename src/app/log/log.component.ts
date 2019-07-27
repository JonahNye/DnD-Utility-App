import { Component} from '@angular/core';
import { CommonService } from '../common.service';

interface Prices{
  cloth: number;
  lumber : number;
  ironOre: number;
  Suud: number;
}

// interface Supplies {
//   id: number,
//   item: string,
//   quantity: number
// }

interface CommodityPrices {
  "Emon": Prices,
  "Drynna": Prices,
  "Westrunn": Prices,
  "Stillben": Prices
}

interface Order {
  item: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
  providers: [CommonService]
})


export class LogComponent{

  suppliesObj :  any;
  fundsObj : any;

  constructor(private commonService : CommonService) { 
    //intial supplies get
    this.commonService.readSupplies().subscribe(res=> {
    console.log(res);
    this.suppliesObj = res;
    console.log(this.suppliesObj);

    //intials funds get
    this.commonService.readFunds().subscribe(res => {
      this.fundsObj = res;
      console.log(this.fundsObj);
      for (let i = 0; i < this.fundsObj.length; i++){
        this.updatedBalance += this.fundsObj[i].balance;
        console.log(this.updatedBalance);
      }
    })

  })}

  //     ********   *********      FUNDS         ********     *******
    //properties for storing user input via ngModel
    toWithdrawal : number;
    toDeposit : number;
    updatedBalance : number = 0;


  //direct funds update. Not called by purchase method
  bankWithdrawal(toWithdrawal){
    let newBalance = parseInt(this.fundsObj[0].balance) - toWithdrawal;
    
    this.commonService.postFunds(newBalance).subscribe(res => {
      this.fundsObj = res;
      for (let i = 0; i < this.fundsObj.length; i++){
        this.updatedBalance += this.fundsObj[i].balance; 
      }
    })
  }

  bankDeposit(toDeposit){
  
    this.commonService.postFunds(toDeposit).subscribe(res => {
      this.fundsObj = res;
      for (let i = 0; i < this.fundsObj.length; i++){
        this.updatedBalance += this.fundsObj[i].balance; 
      }
    })
  }



  

  addState : boolean = false;
  removeState : boolean = false;

 pricePackage : CommodityPrices = {
    "Emon": {
      cloth: 5,
      lumber: 20,
      ironOre: 75,
      Suud: 100
    },
    "Drynna": {
      cloth: 8,
      lumber: 15,
      ironOre: 50,
      Suud: 80
    },
    "Westrunn": {
      cloth: 5,
      lumber: 20,
      ironOre: 70,
      Suud: 100
    },

    "Stillben": {
      cloth: 7,
      lumber: 15,
      ironOre: 45,
      Suud: 70
    }
  }

    pricesState : boolean = false;
    salesState : boolean = false;
    logState: boolean = false;

    cityPosition : number = 0;
    cityList : string[] = ["Emon", "Drynna", "Westrunn", "Stillben"];
    cityName = this.cityList[this.cityPosition];

    incrementCityPosition(){
      this.cityPosition ++;
      this.cityName = this.cityList[this.cityPosition]
    }

    decrementCityPosition(){
      this.cityPosition --;
      this.cityName = this.cityList[this.cityPosition]
    }

    order : Order = {
      item: '',
      quantity: null,
      price: null
    }
}