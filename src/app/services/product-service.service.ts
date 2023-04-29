import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../sharedClassesAndTypes/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  _url: string = '../assets/data/products.json';
  constructor(private http: HttpClient) {}

  GetAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._url).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'Internal Server Error');
      })
    );
  }
  GetProductById(prdId: string): Observable<IProduct | null> {
    // Check if the passed parameter is a number
    if (isNaN(+prdId)) {
      return of(null);
    }

    // Call the API to get all products
    return this.http.get<IProduct[]>(this._url).pipe(
      // Map the array of products to a single product with the specified ID
      map((products: IProduct[]) => products.find((p) => p.id === +prdId)),
      // Return null if no product was found with the specified ID
      map((product: IProduct | undefined) => product || null),
      catchError((err) => {
        return throwError(() => err.message || 'Internal Server Error');
      })
    );
  }
}
