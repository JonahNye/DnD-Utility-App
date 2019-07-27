import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http : HttpClient) { }


  //_-_-_-_-_-_-_-_-_-_-     LOG REQUESTS    -_-_-_-_-_-_-_-_-_-_-//

    //supplies requests

  readSupplies(){
    return this.http.get("http://localhost:3000/api/supplies", {responseType: "json"});
  }

  //funds requests
  readFunds(){
    return this.http.get("http://localhost:3000/api/funds", {responseType: "json"});
  }

  postFunds(newBalance) {
    return this.http.post("http://localhost:3000/api/funds", {balance : newBalance}, {responseType: "json"});
  }

  //_-_-_-_-_-_-_-_-_-_-_   BOARD REQUESTS    -_-_-_-_-_-_-_-_-_-_-//

  readCreatures(){
    return this.http.get("http://localhost:3000/api/creatures", {responseType: "json"});
  }

  postCreature(creatureObj){
    return this.http.post("http://localhost:3000/api/creatures", creatureObj, {responseType: "json"});
  }
}