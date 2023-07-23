import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnidadeDespesa } from 'src/app/models/unidadeDespesa.model';
import { UnidadeDespesaService } from 'src/app/services/unidade-despesa.service';





@Component({
  selector: 'app-unidade-despesa-create',
  templateUrl: './unidade-despesa-create.component.html',
  styleUrls: ['./unidade-despesa-create.component.css']
})
export class UnidadeDespesaCreateComponent implements OnInit {

  unidadeDespesa: UnidadeDespesa = {
   id: 0,
   cgc_uni: "",
   nome:"",
   endereco_uni:"",
   email_uni: "",
   telefone_uni: ""

  }

  constructor(
              private router: Router,
              private unidadeDespesaService: UnidadeDespesaService,
              private route: ActivatedRoute
              ){}

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get("id");
    if(id === null){
     id = "0";
    } else {
      this.unidadeDespesaService.readById(Number(id)).subscribe(unidadeDespesa => {
        this.unidadeDespesa = unidadeDespesa;
      });

    }
  }



  cancel(): void{
    this.router.navigate(['unidadeDespesa']);
  }

  createUnidade(): void {
    this.unidadeDespesaService.create(this.unidadeDespesa).subscribe(() => {
      this.unidadeDespesaService.showMessage(`Unidade da Despesa ${this.unidadeDespesa.nome} foi inserida com sucesso!`);
      this.router.navigate(["/unidadeDespesa"]);
    });

  }

  updateUnidade(): void {
    this.unidadeDespesaService.update(this.unidadeDespesa).subscribe(() => {
      this.unidadeDespesaService.showMessage(`Unidade da Despesa ${this.unidadeDespesa.nome} alterada com sucesso!`);
      this.router.navigate(["/unidadeDespesa"]);
    });
  }

  saveUnidade(): void{
    if(this.unidadeDespesa.id){
      this.updateUnidade();

    }else{
      this.createUnidade();
    }
  }

}
