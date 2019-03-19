import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './toDoForm.component.html',
  styleUrls: ['./toDoForm.component.css']
})
export class ToDoFormComponent {
  @Output() add = new EventEmitter();

  public addItem(title: string) {
    this.add.emit(title);
  }
}
