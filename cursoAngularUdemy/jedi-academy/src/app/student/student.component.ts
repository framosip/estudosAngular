import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() name: string
  @Input() isJedi: boolean

  constructor() { }

  ngOnInit() {
  }

}
