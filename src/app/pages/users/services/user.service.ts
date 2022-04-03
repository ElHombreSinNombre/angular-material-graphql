import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(`${this.url}photos?_start=0&_limit=10`);
  }
}
