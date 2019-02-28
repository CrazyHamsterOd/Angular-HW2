import {Component, OnInit, Input} from '@angular/core';

import {Todo} from '../shared/todo';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  constructor() {
  }

  @Input() todoList: Todo[];

  delete(todo: Todo) {
    this.todoList.splice(this.todoList.indexOf(todo), 1);
  }

  ngOnInit() {
  }
}
