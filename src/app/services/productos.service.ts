import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiURL= 'http://localhost:3000/productos';

  constructor(private http: HttpClient) { 
  }

  getProducts(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiURL}`);
  }

  deleteProduct(id: string): Observable<void>{
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }

  updateProduct(productId: string, producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.apiURL}/${productId}`, producto);
  }

  createProduct(producto: Producto): Observable<Producto>{
    return this.http.post<Producto>(`${this.apiURL}`, producto);
  }

  getProductById(id: string): Observable<Producto | null> {
    return this.http.get<Producto>(`${this.apiURL}/${id}`).pipe(
      catchError(() => of(null)) 
    )
  }
  updateStock(id: number, cantidad: number): Observable<void> {
    return this.http.patch<void>(`${this.apiURL}/${id}`, { cantidadEnStock: cantidad });
  };
}