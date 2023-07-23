import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';

import { objetoDespesa } from '../models/objetoDespesa.model';

@Injectable({
  providedIn: 'root'
})
export class ObjetoDespesaService {

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
  read(): Observable<objetoDespesa[]>{ // "GET - http://localhost:8080/despesas-api"
   return this.http.get<objetoDespesa[]>(`${this.baseUrl}/objetoDespesa`);
  }

  create( objetoDespesa: objetoDespesa): Observable<objetoDespesa> {// "POST - http://localhost:8080/despesas-api"
   return this.http.post<objetoDespesa>(`${this.baseUrl}/objetoDespesa`, objetoDespesa);
  }

  update( objetoDespesa: objetoDespesa): Observable<objetoDespesa> {// "PUT - http://localhost:8080/despesas-api"
   return this.http.put<objetoDespesa>(`${this.baseUrl}/objetoDespesa`, objetoDespesa);
  }

  readById( id: number): Observable<objetoDespesa> {// "GET - http://localhost:8080/despesas-api/objetoDespesa/{id}"
    return this.http.get<objetoDespesa>(`${this.baseUrl}/objetoDespesa/${id}`);
   }

  deleteById( id: number): Observable<objetoDespesa> {// "DELETE - http://localhost:8080/despesas-api/objetoDespesa/{id}"
    return this.http.delete<objetoDespesa>(`${this.baseUrl}/objetoDespesa/${id}`);
   }

}
