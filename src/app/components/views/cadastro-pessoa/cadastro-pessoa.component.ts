import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})

export class CadastroPessoaComponent {

  constructor(private router: Router){}

  navigateTopessoa(): void {
  this.router.navigate(['/cadastroPessoa/create']);
  }
}
