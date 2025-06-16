import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiURL= 'http://localhost:3000';

  constructor(private http: HttpClient) { 
  }

  // --- CRUD de productos ---
  getProducts(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiURL}/productos`);
  }

  getProductById(id: string): Observable<Producto | null> {
    return this.http.get<Producto>(`${this.apiURL}/productos/${id}`).pipe(
      catchError(() => of(null))
    );
  }

  createProduct(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.apiURL}/productos`, producto);
  }

  updateProduct(productId: string, producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.apiURL}/productos/${productId}`, producto);
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/productos/${id}`);
  }

  updateStock(id: string, cantidad: number): Observable<void> {
    return this.http.patch<void>(`${this.apiURL}/productos/${id}`, { cantidadEnStock: cantidad });
  }

   // Catálogos (tipos, talles, colores, etc.)
  getTiposDeProducto(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/tiposDeProducto`);
  }

  getTalles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/talles`);
  }

  getColores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/colores`);
  }

  getColegios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/colegios`);
  }

  getTiposDeTela(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/tiposDeTela`);
  }
}