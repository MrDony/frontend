import { Injectable } from '@angular/core';
import { _BACKEND_API_URL } from './constants';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  public static is_connected = false;

  _API_URL = _BACKEND_API_URL
  _GET_LOGS = "/api/logs"
  constructor(private http:HttpClient) { }

  get_logs():Promise<any>{
    return new Promise<any>((resolve,reject)=>{

    });
  }



}
/**
  addItemToCart(productID: any) {
    let token = localStorage.getItem('token');
    const resp = this.http.post(this._API_URL+this._ADD_ITEM_TO_CART_BY_TOKEN, { token, productID }).subscribe(data => {
      console.log('adding:',data);
    }, error => {
      console.error(error);
    });
    return resp;
  }
 */