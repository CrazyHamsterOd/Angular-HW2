import {Component, Input, TemplateRef} from '@angular/core';

import {Todo} from '../../../config/todo';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() todoList: Todo[];
  @Input() template: TemplateRef<any>;
}
