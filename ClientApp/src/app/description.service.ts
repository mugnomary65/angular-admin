import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDescription } from './views/base/description';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  constructor(private http:HttpClient) { }
  deleteDescription(ids: number[]): Observable<void> {
    return this.http.post<void>('/api/Descripcion/delete/list', ids);
  }
}
