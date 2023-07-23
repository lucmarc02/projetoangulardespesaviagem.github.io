import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { UnidadeDespesa } from '../models/unidadeDespesa.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnidadeDespesaService {

  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  showMessage(msg: string): void{
  this.snackBar.open(msg, 'X',{
    duration: 5000,
    horizontalPosition: "right",
    verticalPosition: "top"
  });
  }

  //recebe os dados do backend
  read(): Observable<UnidadeDespesa[]>{ // "GET - http://localhost:8080/despesas-api"
   return this.http.get<UnidadeDespesa[]>(`${this.baseUrl}/unidadeDespesa`);
  }

  create( unidadeDespesa: UnidadeDespesa): Observable<UnidadeDespesa> {// "POST - http://localhost:8080/despesas-api"
   return this.http.post<UnidadeDespesa>(`${this.baseUrl}/unidadeDespesa`, unidadeDespesa);
  }

  update( unidadeDespesa: UnidadeDespesa): Observable<UnidadeDespesa> {// "PUT - http://localhost:8080/despesas-api"
   return this.http.put<UnidadeDespesa>(`${this.baseUrl}/unidadeDespesa`, unidadeDespesa);
  }

  readById( id: number): Observable<UnidadeDespesa> {// "GET - http://localhost:8080/despesas-api/unidadeDespesa/{id}"
    return this.http.get<UnidadeDespesa>(`${this.baseUrl}/unidadeDespesa/${id}`);
   }

  deleteById( id: number): Observable<UnidadeDespesa> {// "DELETE - http://localhost:8080/despesas-api/unidadeDespesa/{id}"
    return this.http.delete<UnidadeDespesa>(`${this.baseUrl}/unidadeDespesa/${id}`);
   }

}
