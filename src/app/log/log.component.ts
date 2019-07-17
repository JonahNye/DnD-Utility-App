import { Component, OnInit } from '@angular/core';

interface Prices{
  cloth: number;
  lumber : number;
  ironOre: number;
  Suud: number;
}

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
  styleUrls: ['./log.component.css']
})


export class LogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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