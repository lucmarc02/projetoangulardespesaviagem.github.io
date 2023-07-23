import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { centroCusto } from '../models/centroCusto.model';

@Injectable({
  providedIn: 'root'
})
export class CentroDespesaService {

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
  read(): Observable<centroCusto[]>{ // "GET - http://localhost:8080/despesas-api"
   return this.http.get<centroCusto[]>(`${this.baseUrl}/centroCusto`);
  }

  create( centroCusto: centroCusto): Observable<centroCusto> {// "POST - http://localhost:8080/despesas-api"
   return this.http.post<centroCusto>(`${this.baseUrl}/centroCusto`, centroCusto);
  }

  update( centroCusto: centroCusto): Observable<centroCusto> {// "PUT - http://localhost:8080/despesas-api"
   return this.http.put<centroCusto>(`${this.baseUrl}/centroCusto`, centroCusto);
  }

  readByid( id: number): Observable<centroCusto> {// "GET - http://localhost:8080/despesas-api/centroCusto/{id}"
    return this.http.get<centroCusto>(`${this.baseUrl}/centroCusto/${id}`);
   }

  deleteByid( id: number): Observable<centroCusto> {// "DELETE - http://localhost:8080/despesas-api/centroCusto/{id}"
    return this.http.delete<centroCusto>(`${this.baseUrl}/centroCusto/${id}`);
   }

}
