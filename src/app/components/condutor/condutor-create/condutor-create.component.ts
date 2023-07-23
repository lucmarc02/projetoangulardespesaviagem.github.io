import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { condutor } from 'src/app/models/condutor.model';

@Component({
  selector: 'app-condutor-create',
  templateUrl: './condutor-create.component.html',
  styleUrls: ['./condutor-create.component.css']
})
export class CondutorCreateComponent {

  condutor: condutor = {
    id: 0,
    idPessoa: 0,
    categoria: "",
    cnh: 0,
    nome: "",
    dataVencimento: "",
    pontos: 0,
    situacao: false,
    estado: ""


  }

  constructor(private router: Router){}

   cancel(): void{
     this.router.navigate(['condutor']);
   }

}
