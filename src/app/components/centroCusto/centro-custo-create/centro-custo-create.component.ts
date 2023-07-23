import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { centroCusto } from 'src/app/models/centroCusto.model';
import { UnidadeDespesa } from 'src/app/models/unidadeDespesa.model';
import { CentroDespesaService } from 'src/app/services/centro-despesa.service';
import { UnidadeDespesaService } from 'src/app/services/unidade-despesa.service';






@Component({
  selector: 'app-centro-custo-create',
  templateUrl: './centro-custo-create.component.html',
  styleUrls: ['./centro-custo-create.component.css']
})
export class CentroCustoCreateComponent implements OnInit {


  centroCusto: centroCusto = {
    id: 0,
    nomeCentro: '',
    ativo: false,
    codigocentrocusto: '',
    unidadeDespesa: {
      id: 0,
      cgc_uni: '',
      nome: '',
      endereco_uni: '',
      email_uni: '',
      telefone_uni: ''
    },
  }

  unidadeDespesas: UnidadeDespesa[] = [];

  constructor(

    private centroDespesaService: CentroDespesaService,
    private unidadeDespesaService: UnidadeDespesaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getunidadeDespesa();

    let id = this.route.snapshot.paramMap.get("id");
    if (id === null) {
      id = "0";

    } else {
      this.centroDespesaService.readByid(Number(id)).subscribe(centroCusto => {
        console.log(centroCusto);
        this.centroCusto = centroCusto;
      });
    }

  }

  cancel(): void {
    this.router.navigate(['centroCusto']);
  }

  getunidadeDespesa(): void {
    this.unidadeDespesaService.read().subscribe(unidadeDespesa => {
      this.unidadeDespesas = unidadeDespesa;
    });
  }


  createCentroCusto(): void {
    this.centroDespesaService.create(this.centroCusto).subscribe(() => {
      this.centroDespesaService.showMessage(`Centro de Custo ${this.centroCusto.nomeCentro} foi inserido com sucesso!`);
      this.router.navigate(["/centroCusto"]);
    });

  }

  updateCentroCusto(): void {
    this.centroDespesaService.update(this.centroCusto).subscribe(() => {
      this.centroDespesaService.showMessage(`Centro de Custo ${this.centroCusto.nomeCentro} alterado com sucesso!`);
      this.router.navigate(["/centroCusto"]);
    });
  }

  saveCentroCusto(): void {
    if (this.centroCusto.id) {
      this.updateCentroCusto();

    } else {
      this.createCentroCusto();
    }
  }

}
