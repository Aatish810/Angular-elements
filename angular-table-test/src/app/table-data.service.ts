import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor(private http: HttpClient) { }

  getTableData(url: string ='https://jsonplaceholder.typicode.com/posts'): Observable<any[]> {
    return this.http.get<any[]>(url)
  }
}
