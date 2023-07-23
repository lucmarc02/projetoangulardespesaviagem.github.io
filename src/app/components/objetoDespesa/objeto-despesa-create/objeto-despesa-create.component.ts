import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { objetoDespesa } from 'src/app/models/objetoDespesa.model';
import { ObjetoDespesaService } from 'src/app/services/objeto-despesa.service';

@Component({
  selector: 'app-objeto-despesa-create',
  templateUrl: './objeto-despesa-create.component.html',
  styleUrls: ['./objeto-despesa-create.component.css']
})
export class ObjetoDespesaCreateComponent implements OnInit {

  objetoDespesa: objetoDespesa = {
    id: 0,
    nomeobjeto:"",
    medidaobjeto:""



  }

   constructor(
        private router: Router,
        private objetoDespesaService: ObjetoDespesaService,
        private route: ActivatedRoute
        ){}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    if(id === null){
     id = "0";

    } else {
      this.objetoDespesaService.readById(Number(id)).subscribe(objetoDespesa => {
        this.objetoDespesa = objetoDespesa;
      });
    }
  }



   cancel(): void{
     this.router.navigate(['objetoDespesa']);
   }

   createObjeto(): void {
    this.objetoDespesaService.create(this.objetoDespesa).subscribe(() => {
      this.objetoDespesaService.showMessage(`Objeto da Despesa ${this.objetoDespesa.nomeobjeto} foi inserido com sucesso!`);
      this.router.navigate(["/objetoDespesa"]);
    });

  }

  updateObjeto(): void {
    this.objetoDespesaService.update(this.objetoDespesa).subscribe(() => {
      this.objetoDespesaService.showMessage(`Objeto da Despesa ${this.objetoDespesa.nomeobjeto} alterado com sucesso!`);
      this.router.navigate(["/objetoDespesa"]);
    });
  }

  saveObjeto(): void{
    if(this.objetoDespesa.id){
      this.updateObjeto();

    }else{
      this.createObjeto();
    }
  }
}
