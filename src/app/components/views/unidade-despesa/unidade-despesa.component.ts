import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unidade-despesa',
  templateUrl: './unidade-despesa.component.html',
  styleUrls: ['./unidade-despesa.component.css']
})
export class UnidadeDespesaComponent {

  constructor(private router: Router){}

  navigateTounidadeDespesa(): void {
    this.router.navigate(['/unidadeDespesa/create']);
  }

}


