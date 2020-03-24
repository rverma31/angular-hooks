import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersInfoService {

  usersUrl: string = "https://jsonplaceholder.typicode.com/users"; 

  constructor(private http: HttpClient) {}

  getUsersInfo(): Observable<Users[]> {
    return this.http.get<Users[]>(this.usersUrl);

    
  }

}
