import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-centro-custo',
  templateUrl: './centro-custo.component.html',
  styleUrls: ['./centro-custo.component.css']
})
export class CentroCustoComponent {
   constructor(private router: Router){}

   navigateTocentroCusto(): void{

    this.router.navigate(['/centroCusto/create']);
   }
}
