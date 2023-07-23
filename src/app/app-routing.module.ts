import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { UnidadeDespesaComponent } from './components/views/unidade-despesa/unidade-despesa.component';
import { CentroCustoComponent } from './components/views/centro-custo/centro-custo.component';
import { ObjetoDespesaComponent } from './components/views/objeto-despesa/objeto-despesa.component';
import { CadastroPessoaComponent } from './components/views/cadastro-pessoa/cadastro-pessoa.component';
import { CadastroVeiculoComponent } from './components/views/cadastro-veiculo/cadastro-veiculo.component';
import { CadastroRotaComponent } from './components/views/cadastro-rota/cadastro-rota.component';
import { AdiantamentoViagemComponent } from './components/views/adiantamento-viagem/adiantamento-viagem.component';
import { CadastroDespesaComponent } from './components/views/cadastro-despesa/cadastro-despesa.component';
import { UnidadeDespesaCreateComponent } from './components/unidadeDespesa/unidade-despesa-create/unidade-despesa-create.component';
import { CentroCustoCreateComponent } from './components/centroCusto/centro-custo-create/centro-custo-create.component';
import { ObjetoDespesaCreateComponent } from './components/objetoDespesa/objeto-despesa-create/objeto-despesa-create.component';
import { CadastroPessoaCreateComponent } from './components/cadastroPessoa/cadastro-pessoa-create/cadastro-pessoa-create.component';
import { CondutorComponent } from './components/views/condutor/condutor.component';
import { CondutorCreateComponent } from './components/condutor/condutor-create/condutor-create.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard]
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'register',
    component: RegisterComponent,
  },

  {
    path: 'unidadeDespesa',
    component: UnidadeDespesaComponent,
    canActivate: [authGuard]
  },
  {
    path: 'unidadeDespesa/create',
    component: UnidadeDespesaCreateComponent,
    canActivate: [authGuard]
  },
  {
    path: 'unidadeDespesa/update/:id',
    component: UnidadeDespesaCreateComponent,
    canActivate: [authGuard]
  },

  {
    path: 'centroCusto',
    component: CentroCustoComponent,
    canActivate: [authGuard]
  },


  {
    path: 'centroCusto/create',
    component: CentroCustoCreateComponent,
    canActivate: [authGuard]
  },
  {
    path: 'centroCusto/update/:id',
    component: CentroCustoCreateComponent,
    canActivate: [authGuard]
  },

  {
    path: 'objetoDespesa',
    component: ObjetoDespesaComponent,
    canActivate: [authGuard]
  },
  {
    path: 'objetoDespesa/create',
    component: ObjetoDespesaCreateComponent,
    canActivate: [authGuard]
  },
  {
    path: 'objetoDespesa/update/:id',
    component: ObjetoDespesaCreateComponent,
    canActivate: [authGuard]
  },


  {
    path: 'cadastroPessoa',
    component: CadastroPessoaComponent,
    canActivate: [authGuard]
  },
  {
    path: 'cadastroPessoa/create',
    component: CadastroPessoaCreateComponent,
    canActivate: [authGuard]
  },
  {
    path: 'cadastroPessoa/update/:id',
    component: CadastroPessoaCreateComponent,
    canActivate: [authGuard]
  },

  {
    path: 'condutor',
    component: CondutorComponent,
    canActivate: [authGuard]
  },

  {
    path: 'condutor/create',
    component: CondutorCreateComponent,
    canActivate: [authGuard]
  },

  {
    path: 'condutor/update/:id',
    component: CondutorCreateComponent,
    canActivate: [authGuard]
  },

  {
    path: 'cadastroVeiculo',
    component: CadastroVeiculoComponent,
    canActivate: [authGuard]
  },
  {
    path: 'cadastroRota',
    component: CadastroRotaComponent,
    canActivate: [authGuard]
  },
  {
    path: 'adiantamentoViagem',
    component: AdiantamentoViagemComponent,
    canActivate: [authGuard]
  },
  {
    path: 'cadastroDespesa',
    component: CadastroDespesaComponent,
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
