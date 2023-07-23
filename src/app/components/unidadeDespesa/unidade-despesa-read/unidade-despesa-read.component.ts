import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnidadeDespesa } from 'src/app/models/unidadeDespesa.model';
import { UnidadeDespesaService } from 'src/app/services/unidade-despesa.service';

@Component({
  selector: 'app-unidade-despesa-read',
  templateUrl: './unidade-despesa-read.component.html',
  styleUrls: ['./unidade-despesa-read.component.css']
})
export class UnidadeDespesaReadComponent implements OnInit{

  unidadeDespesas: UnidadeDespesa[] = [];
  displayedColumns: string[] = ["id", "cgc_uni", "nome", "endereco_uni","email_uni", "telefone_uni",  "actions"]

  constructor(
    private unidadeDespesaService: UnidadeDespesaService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.readUnidades();
}

readUnidades(): void{
  this.unidadeDespesaService.read().subscribe(res => {
    this.unidadeDespesas = res;
    });



  }
}
