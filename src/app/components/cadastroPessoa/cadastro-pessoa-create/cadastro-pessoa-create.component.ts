import { Component } from '@angular/core';



import { Router } from '@angular/router';
import { pessoa } from 'src/app/models/pessoa.model';





@Component({
  selector: 'app-cadastro-pessoa-create',
  templateUrl: './cadastro-pessoa-create.component.html',
  styleUrls: ['./cadastro-pessoa-create.component.css'],



})
export class CadastroPessoaCreateComponent {

  pessoa: pessoa = {
    id: 0,
    tipo: "",
    cpf: 0,
    cnpj: 0,
    rg: 0,
    nome: "",
    dataNacimento: "",
    telefone: "",
    email: "",
    situacao: false,
    cep: "",
    endereco: "",
    bairro: "",
    cidade: "",
    estado: ""



   }



   constructor(private router: Router){}

   cancel(): void{
     this.router.navigate(['cadastroPessoa']);
   }


 }



