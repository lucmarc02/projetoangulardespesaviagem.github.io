import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-condutor',
  templateUrl: './condutor.component.html',
  styleUrls: ['./condutor.component.css']
})
export class CondutorComponent {

  constructor(private router: Router){}

  navigateToconduntor(): void {
    this.router.navigate(['/condutor/create']);
  }

}
