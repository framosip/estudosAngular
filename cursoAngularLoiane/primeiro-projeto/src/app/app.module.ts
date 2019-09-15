//Prepara a aplicação para ser rodada em um browser
import { BrowserModule } from '@angular/platform-browser';
//Indica que a classe será um módulo
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Import das classes dos projetos (meus componentes)
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';

//Indica que a classe será um módulo
//É possivel criar outros módulos para features menores
@NgModule({
  declarations: [ //Lista componentes, diretivas e pipes
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  imports: [ //Outros módulos que utilizaremos neste módulo ou que esteja em algum componente no declarations
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [], //Lista de serviços para todos os componentes deste módulo (neste caso do appModulo serve para toda a aplicação)
  bootstrap: [AppComponent] //Existe somente no módulo raiz. Informa qual componente deve ser instanciando quando a aplicação inicia
})
export class AppModule { }
