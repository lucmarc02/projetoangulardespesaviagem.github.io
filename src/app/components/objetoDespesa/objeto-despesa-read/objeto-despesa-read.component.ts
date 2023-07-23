import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { objetoDespesa } from 'src/app/models/objetoDespesa.model';
import { ObjetoDespesaService } from 'src/app/services/objeto-despesa.service';
import {MatTableDataSource} from '@angular/material/table';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-objeto-despesa-read',
  templateUrl: './objeto-despesa-read.component.html',
  styleUrls: ['./objeto-despesa-read.component.css']
})
export class ObjetoDespesaReadComponent implements OnInit{


  user: Usuario = {
    id: 0,
    nome: '',
    login: '',
    admin: false
  };

  objetoDespesa: objetoDespesa[] = [];
  displayedColumns: string[] = ["id", "nomeobjeto","medidaobjeto", "actions"];
  dataSource: any = [];

  constructor(
    private objetoDespesaService : ObjetoDespesaService,
    private router: Router,
    private authenticationService: AuthenticationService
  ){}

  ngOnInit(): void {
    this.user = this.authenticationService.currentUserValue.usuario;
    this.readObjetos();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  readObjetos(): void {
      this.objetoDespesaService.read().subscribe(res => {
      this.objetoDespesa = res;
      this.dataSource = new MatTableDataSource<objetoDespesa>(this.objetoDespesa);
    });
  }

  deleteObjetoById(id: any): void{
    if(window.confirm('Confirma a exclusão do Obejto da Despesa.')){
       this.objetoDespesaService.deleteById(id).subscribe(()=> {
       this.objetoDespesaService.showMessage("Objeto da Despesa excluída com sucesso!!!");
       this.readObjetos();
       this.router.navigate(['/objetoDespesa']);
       })
    }
  }

}
