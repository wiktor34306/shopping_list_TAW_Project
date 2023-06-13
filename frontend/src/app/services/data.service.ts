import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any[]>(this.url + 'api/products');
  }

  getById(id: string) {
    return this.http.get<any>(this.url + 'api/product/' + id);
  }

  add(data: any) {
    return this.http.post<any>(this.url + 'api/product', data);
  }

  deleteProduct(id: string) {
    return this.http.delete<any>(this.url + 'api/product/' + id);
    // return this.http.delete<any>(`${this.url}api/product/${id}`);
  }
  
  update(id: string, data: any) {
    return this.http.put<any>(`${this.url}api/product/${id}`, data);
  }
    
}
