import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnChanges {
  public placeholder: string;
  @Input() title = '';
  @Input() type: string;
  @Output() add = new EventEmitter();
  @Output() edit = new EventEmitter();

  public onSubmit() {
    if (this.type === 'edit') {
      this.edit.emit(this.title);
    } else if (this.type === 'add') {
      this.add.emit(this.title);
    }
  }

  ngOnChanges(): void {
    if (this.type === 'add') {
      this.placeholder = 'Add task...';
    } else if (this.type === 'edit') {
      this.placeholder = 'Edit task...';
    }
  }
}
