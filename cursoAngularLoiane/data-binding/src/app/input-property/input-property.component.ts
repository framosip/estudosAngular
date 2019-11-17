import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']

  /*O input também pode ser declarado aqui
    Neste caso não teria o @Input() abaixo e aqui seria declarado assim:

    inputs: ['nomeCurso:nome'] onde:
    nomeCurso é o nome da variável e nome é o nome a ser dado na utilização do componente no html (property bind)

    Se não quiser utilizar nome diferente na property bind e sim o nome da proṕria variável, utilizar assim:

    inputs: ['nomeCurso']

    Se utilizar aqui, lembrar de retirar abaixo o @Input()
  */

})
export class InputPropertyComponent implements OnInit {

  //nome é o que deve ser utilizar como property bind quando utilizar este componente. Se retirar 'nome' deve ser utilizado nomeCurso
  //que é o nome da variável
  @Input('nome') nomeCurso: string = '';

  constructor() { }

  ngOnInit() {
  }

}
