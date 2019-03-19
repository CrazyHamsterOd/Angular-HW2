import {Component, Input, TemplateRef} from '@angular/core';

import {Todo} from '../../../config/todo';

@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.css']
})
export class MainWrapperComponent {
  todoList: Todo[] = this.getTodos();

  private getNextId(): number {
    if (this.todoList.length === 0) {
      return 1;
    } else {
      return this.todoList[this.todoList.length - 1].id + 1;
    }
  }

  public getTodos(): Todo[] {
    const arrayOfValues = Object.values(localStorage);
    const todoList: Todo[] = arrayOfValues.map(elem => {
      const element = JSON.parse(elem);
      return element;
    });
    return todoList;
  }

  public setTodo(title: string): void {
    const todo = new Todo(this.getNextId(), title);
    this.todoList.push(new Todo(this.getNextId(), title));
    localStorage.setItem(todo.id.toString(), JSON.stringify(todo));
  }

  public deleteTodo(todo: Todo): void {
    this.todoList.splice(this.todoList.indexOf(todo), 1);
    localStorage.removeItem(todo.id.toString());
  }

  public updateTodo(todo: Todo): void {
    localStorage.setItem(todo.id.toString(), JSON.stringify(todo));
  }
}
