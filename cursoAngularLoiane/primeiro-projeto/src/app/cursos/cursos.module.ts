import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';

@NgModule({
  declarations: [CursosComponent, CursoDetalheComponent],
  imports: [
    CommonModule
  ],
  exports: [ //Informa quais componentes estão exportados para outros módulos
    CursosComponent
  ],
  providers: [ //Informa os serviços fornecedores
    CursosService
  ]
})
export class CursosModule { }
