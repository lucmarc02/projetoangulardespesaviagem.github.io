import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-objeto-despesa',
  templateUrl: './objeto-despesa.component.html',
  styleUrls: ['./objeto-despesa.component.css']
})
export class ObjetoDespesaComponent {
  constructor(private router: Router){}

   navigateToobjetoDespesa(): void{
   this.router.navigate(['/objetoDespesa/create']);
   }
}
