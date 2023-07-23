import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { pessoa } from '../models/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

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
  read(): Observable<pessoa[]>{ // "GET - http://localhost:8080/despesas-api"
   return this.http.get<pessoa[]>(`${this.baseUrl}/cadastroPessoa`);
  }

  create( pessoa: pessoa): Observable<pessoa> {// "POST - http://localhost:8080/despesas-api"
   return this.http.post<pessoa>(`${this.baseUrl}/cadastroPessoa`, pessoa);
  }

  update( pessoa: pessoa): Observable<pessoa> {// "PUT - http://localhost:8080/despesas-api"
   return this.http.put<pessoa>(`${this.baseUrl}/cadastroPessoa`, pessoa);
  }

  readByid( id: number): Observable<pessoa> {// "GET - http://localhost:8080/despesas-api/pessoa/{id}"
    return this.http.get<pessoa>(`${this.baseUrl}/cadastroPessoa/${id}`);
   }

  deleteByid( id: number): Observable<pessoa> {// "DELETE - http://localhost:8080/despesas-api/pessoa/{id}"
    return this.http.delete<pessoa>(`${this.baseUrl}/cadastroPessoa/${id}`);
   }

}
