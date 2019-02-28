import {Component, OnInit} from '@angular/core';

import {Todo} from '../shared/todo';
import {todoList} from '../shared/data';

@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.css']
})
export class MainWrapperComponent implements OnInit {

  constructor() {
  }

  todoList: Todo[] = todoList;

  create(title: string) {
    const todo = new Todo(title);
    this.todoList.push(todo);
  }

  ngOnInit() {
  }

}
