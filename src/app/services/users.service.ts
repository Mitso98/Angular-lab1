import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IUser } from '../sharedClassesAndTypes/Iuser';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  _url = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this._url).pipe(catchError((err)=>{
      return throwError(err.message || "Internal server error");
    }));
  }
  
}
