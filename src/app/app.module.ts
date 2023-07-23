import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{ HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { FooterComponent } from './components/template/footer/footer.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

import { MatToolbarModule } from '@angular/material/toolbar';





import { HomeComponent } from './components/views/home/home.component';
import { UnidadeDespesaComponent } from './components/views/unidade-despesa/unidade-despesa.component';
import { CentroCustoComponent } from './components/views/centro-custo/centro-custo.component';
import { ObjetoDespesaComponent } from './components/views/objeto-despesa/objeto-despesa.component';
import { CadastroPessoaComponent } from './components/views/cadastro-pessoa/cadastro-pessoa.component';
import { CadastroVeiculoComponent } from './components/views/cadastro-veiculo/cadastro-veiculo.component';
import { CadastroRotaComponent } from './components/views/cadastro-rota/cadastro-rota.component';
import { AdiantamentoViagemComponent } from './components/views/adiantamento-viagem/adiantamento-viagem.component';
import { CadastroDespesaComponent } from './components/views/cadastro-despesa/cadastro-despesa.component';

import { CentroCustoCreateComponent } from './components/centroCusto/centro-custo-create/centro-custo-create.component';
import { CentroCustoReadComponent } from './components/centroCusto/centro-custo-read/centro-custo-read.component';
import { UnidadeDespesaCreateComponent } from './components/unidadeDespesa/unidade-despesa-create/unidade-despesa-create.component';
import { UnidadeDespesaReadComponent } from './components/unidadeDespesa/unidade-despesa-read/unidade-despesa-read.component';
import { ObjetoDespesaCreateComponent } from './components/objetoDespesa/objeto-despesa-create/objeto-despesa-create.component';
import { ObjetoDespesaReadComponent } from './components/objetoDespesa/objeto-despesa-read/objeto-despesa-read.component';
import { CadastroPessoaCreateComponent } from './components/cadastroPessoa/cadastro-pessoa-create/cadastro-pessoa-create.component';
import { CadastroPessoaReadComponent } from './components/cadastroPessoa/cadastro-pessoa-read/cadastro-pessoa-read.component';
import { CadastroVeiculoCreateComponent } from './components/cadastroVeiculo/cadastro-veiculo-create/cadastro-veiculo-create.component';
import { CadastroVeiculoReadComponent } from './components/cadastroVeiculo/cadastro-veiculo-read/cadastro-veiculo-read.component';
import { CadastroRotaCreateComponent } from './components/cadastroRota/cadastro-rota-create/cadastro-rota-create.component';
import { CadastroRotaReadComponent } from './components/cadastroRota/cadastro-rota-read/cadastro-rota-read.component';
import { AdiantamentoViagemCreateComponent } from './components/adiantamentoViagem/adiantamento-viagem-create/adiantamento-viagem-create.component';
import { AdiantamentoViagemReadComponent } from './components/adiantamentoViagem/adiantamento-viagem-read/adiantamento-viagem-read.component';
import { CadastroDespesaCreateComponent } from './components/cadastroDespesa/cadastro-despesa-create/cadastro-despesa-create.component';
import { CadastroDespesaReadComponent } from './components/cadastroDespesa/cadastro-despesa-read/cadastro-despesa-read.component';




import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CondutorComponent } from './components/views/condutor/condutor.component';
import { CondutorCreateComponent } from './components/condutor/condutor-create/condutor-create.component';
import { CondutorReadComponent } from './components/condutor/condutor-read/condutor-read.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import localePt from '@angular/common/locales/pt';

 import { registerLocaleData } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { JwtInterceptor } from './guards/jwt.interceptor';
import { ErrorInterceptor } from './guards/error.interceptor';
registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    UnidadeDespesaComponent,
    CentroCustoComponent,
    ObjetoDespesaComponent,
    CadastroPessoaComponent,
    CadastroVeiculoComponent,
    CadastroRotaComponent,
    AdiantamentoViagemComponent,
    CadastroDespesaComponent,
    UnidadeDespesaCreateComponent,
    UnidadeDespesaReadComponent,
    CentroCustoCreateComponent,
    CentroCustoReadComponent,
    ObjetoDespesaCreateComponent,
    ObjetoDespesaReadComponent,
    CadastroPessoaCreateComponent,
    CadastroPessoaReadComponent,
    CadastroVeiculoCreateComponent,
    CadastroVeiculoReadComponent,
    CadastroRotaCreateComponent,
    CadastroRotaReadComponent,
    AdiantamentoViagemCreateComponent,
    AdiantamentoViagemReadComponent,
    CadastroDespesaCreateComponent,
    CadastroDespesaReadComponent,
    CondutorComponent,
    CondutorCreateComponent,
    CondutorReadComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule







  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE, useValue: "pt-BR"
    },
    {
      provide: LOCALE_ID, useValue: "pt-BR"
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
