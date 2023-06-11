// import { Injectable } from '@angular/core';
// import {HttpClient} from "@angular/common/http";

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {

//   private url = "http://localhost:3000/";
//   constructor(private http: HttpClient) { }

//   getAll() {
//     return this.http.get(this.url + 'api/products')
//   }

//   getById(id: string) {
//     return this.http.get(this.url + 'api/product/' + id);
//   }

//   add(data: any) {
//     return this.http.post(this.url + 'api/product' , data);
//   }

// }

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url + 'api/products');
  }

  getById(id: string) {
    return this.http.get(this.url + 'api/product/' + id);
  }

  add(data: any) {
    return this.http.post(this.url + 'api/product', data);
  }

  deleteList(id: string) {
    return this.http.delete(`${this.url}api/product/${id}`);
  }
  
}
