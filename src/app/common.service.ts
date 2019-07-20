import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http : HttpClient) { }

    //supplies requests
  getSupplies(){
    return this.http.get("http://localhost:3000/api/supplies", {responseType: "json"});
  }

  //funds requests
  getFunds(){
    return this.http.get("http://localhost:3000/api/funds", {responseType: "json"});
  }

  putFunds(newBalance){
    return this.http.put("http://localhost:3000/api/funds", { balance: newBalance }, {responseType: "json"});
  }
}