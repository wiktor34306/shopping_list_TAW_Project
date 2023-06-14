import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private url = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any[]>(this.url + 'api/lists');
  }

  getById(id: string) {
    return this.http.get<any>(this.url + 'api/list/' + id);
  }

  add(data: any) {
    return this.http.post<any>(this.url + 'api/list', data);
  }

  deleteList(listId: string) {
    return this.http.delete<any>(`${this.url}api/list/${listId}`);
  }
  
  updateListTitle(listId: string, newTitle: string) {
    const data = { titleOfList: newTitle };
    return this.http.put<any>(`${this.url}api/list/${listId}`, data);
  }
}
