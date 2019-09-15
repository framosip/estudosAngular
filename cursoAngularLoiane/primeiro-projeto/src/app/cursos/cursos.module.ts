import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  declarations: [CursosComponent, CursoDetalheComponent],
  imports: [
    CommonModule
  ],
  exports: [ //Informa quais componentes estão exportados para outros módulos
    CursosComponent
  ]
})
export class CursosModule { }
