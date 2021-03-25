import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { PizzaSearch } from 'src/app/models/pizza-search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  constructor() { }
  search:PizzaSearch = {name:""};

  @Output() SearchEvent = new EventEmitter<PizzaSearch>();

  ngOnInit(): void {
  }

  onChange(){
    this.SearchEvent.emit(this.search);
  }
}
