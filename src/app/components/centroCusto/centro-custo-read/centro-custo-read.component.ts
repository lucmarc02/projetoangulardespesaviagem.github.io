import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { centroCusto } from 'src/app/models/centroCusto.model';
import { CentroDespesaService } from 'src/app/services/centro-despesa.service';
import {MatTableDataSource} from '@angular/material/table';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthenticationService } from 'src/app/services/authentication.service';






@Component({
  selector: 'app-centro-custo-read',
  templateUrl: './centro-custo-read.component.html',
  styleUrls: ['./centro-custo-read.component.css'],


})
export class CentroCustoReadComponent implements OnInit {

  user: Usuario = {
    id: 0,
    nome: '',
    login: '',
    admin: false
  };

  centroCusto: centroCusto[] = [];
  displayedColumns: string[] = ["id", "nomeCentro","codigocentrocusto","unidadeDespesa", "ativo","actions"];
  dataSource: any = [];



  constructor(
    private CentroDespesaService: CentroDespesaService,
    private router: Router,
    private authenticationService: AuthenticationService

  ){}

  ngOnInit(): void {
    this.user = this.authenticationService.currentUserValue.usuario;
    this.readCentroCusto();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  readCentroCusto(): void {
      this.CentroDespesaService.read().subscribe(res => {
      this.centroCusto = res;
      this.dataSource = new MatTableDataSource<centroCusto>(this.centroCusto);
    });
  }

  deleteCentroCustoByid(id: any): void{
    if(window.confirm('Confirma a exclusão do Centro de Custo.')){
        this.CentroDespesaService.deleteByid(id).subscribe(()=> {
        this.CentroDespesaService.showMessage("Centro de Custo excluída com sucesso!!!");
        this.readCentroCusto();
        this.router.navigate(['/centroCusto']);
      })
    }

  }

 }
