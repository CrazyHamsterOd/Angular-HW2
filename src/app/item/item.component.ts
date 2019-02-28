import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {Todo} from '../shared/todo';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() {
  }

  @Input() todo: Todo;
  @Output() delete = new EventEmitter();

  toggle() {
    this.todo.completed = !this.todo.completed;
  }

  onDelete() {
    this.delete.emit(this.todo);
  }

  ngOnInit() {
  }

}
