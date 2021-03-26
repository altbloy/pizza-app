import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { PizzaAddition } from 'src/app/models/pizza-addition';

@Component({
  selector: 'app-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxListComponent implements OnInit {

  constructor() { }
  @Input() list!:PizzaAddition[];
  @Output() changeEvent= new EventEmitter<PizzaAddition[]>();
  
  ngOnInit(): void {
  }

  onChange(ev:any, item:PizzaAddition){
    item.value = !item.value;
    this.changeEvent.emit(this.list);
  }
}
