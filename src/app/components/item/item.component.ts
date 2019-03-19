import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Todo} from '../../../config/todo';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  public editing = false;
  @Input() todo: Todo;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  public toggle() {
    this.todo.completed = !this.todo.completed;
  }

  public onChange() {
    this.edit.emit(this.todo);
  }

  public onEditing() {
    this.editing = !this.editing;
  }

  public onEdit(title: string) {
    this.todo.title = title;
    this.editing = false;
    this.edit.emit(this.todo);
  }

  public onDelete() {
    this.delete.emit(this.todo);
  }
}
