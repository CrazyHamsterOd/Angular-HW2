import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './toDoForm.component.html',
  styleUrls: ['./toDoForm.component.css']
})
export class ToDoFormComponent implements OnInit {

  constructor() {
  }

  title: string = '';
  @Output() add = new EventEmitter();

  onSubmit() {
    this.add.emit(this.title);
  }

  ngOnInit() {
  }

}
