import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IComments } from '../sharedClassesAndTypes/ICcomment';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  getComments(id: number): Observable<IComments[]> {
    let url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
    return this.http.get<IComments[]>(url).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'Internal Server error');
      })
    );
  }
}
