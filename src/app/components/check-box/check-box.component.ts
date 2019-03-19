import {Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnChanges {
  @Input() done: boolean;
  @Output() completed = new EventEmitter<boolean>();

  constructor(public element: ElementRef) {  }

  ngOnChanges(changes: SimpleChanges): void {
    this.element.nativeElement.className = this.done ? 'check_box' : 'check_box_outline_blank';
    this.completed.emit(this.done);
  }
}
