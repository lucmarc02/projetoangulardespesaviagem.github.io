import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { condutor } from '../models/condutor.model';

@Injectable({
  providedIn: 'root'
})
export class CondutorService {

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
read(): Observable<condutor[]>{ // "GET - http://localhost:8080/despesas-api"
  return this.http.get<condutor[]>(`${this.baseUrl}/condutor`);
 }

 create( condutor: condutor): Observable<condutor> {// "POST - http://localhost:8080/despesas-api"
  return this.http.post<condutor>(`${this.baseUrl}/condutor`, condutor);
 }

 update( condutor: condutor): Observable<condutor> {// "PUT - http://localhost:8080/despesas-api"
  return this.http.put<condutor>(`${this.baseUrl}/condutor`, condutor);
 }

 readByid( id: number): Observable<condutor> {// "GET - http://localhost:8080/despesas-api/condutor/{id}"
   return this.http.get<condutor>(`${this.baseUrl}/condutor/${id}`);
  }

 deleteByid( id: number): Observable<condutor> {// "DELETE - http://localhost:8080/despesas-api/condutor/{id}"
   return this.http.delete<condutor>(`${this.baseUrl}/condutor/${id}`);
  }

}
