import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
private apiURL= 'http://localhost:3000/clientes';
  constructor(private http: HttpClient) { }

  getClients(): Observable<Cliente[]> {
      return this.http.get<Cliente[]>(`${this.apiURL}`);
    }
  
    deleteClient(id: string): Observable<void>{
      return this.http.delete<void>(`${this.apiURL}/${id}`);
    }
  
    updateClient(productId: string, cliente: Cliente): Observable<Cliente> {
      return this.http.put<Cliente>(`${this.apiURL}/${productId}`, cliente);
    }
  
    createClient(cliente: Cliente): Observable<Cliente>{
      return this.http.post<Cliente>(`${this.apiURL}`, cliente);
    }
  
    getClientById(id: string): Observable<Cliente | null> {
      return this.http.get<Cliente>(`${this.apiURL}/${id}`).pipe(
        catchError(() => of(null)) 
      )
    };
  }

