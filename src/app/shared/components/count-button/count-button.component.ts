import { Component,ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count-button',
  templateUrl: './count-button.component.html',
  styleUrls: ['./count-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountButtonComponent {

  constructor() { }
  @Output() countChange = new EventEmitter<number>();
  count: number = 1;

  public Increase() {
    this.count++;
    this.countChange.emit(this.count);
  }

  public Decrease() {
    if (this.count > 1)
      this.count--;
    this.countChange.emit(this.count);
  }
}
