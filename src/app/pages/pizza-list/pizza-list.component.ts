import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { BasketItem } from 'src/app/models/basketItem';
import { Pizza } from 'src/app/models/pizza';
import { ApiService } from 'src/app/services/api-service.service';
import { BasketService } from 'src/app/services/basket.service';
import { SearchComponent } from './components/search/search.component';

@Component({
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements AfterViewInit, OnDestroy {

  constructor(private api: ApiService, private basket: BasketService) { }

  private subscriptions: Subscription[] = [];

  list$!: Observable<Pizza[]>;

  @ViewChild(SearchComponent) searchPanel!: SearchComponent;

  ngAfterViewInit(): void {
    this.list$ = combineLatest(
      [
        this.api.getPizzaList(),
        this.searchPanel.SearchEvent.pipe(
          debounceTime(300),
          startWith({name:''})
        )
      ]
    ).pipe(
      map(([data, query]) => {
        const lowerCaseQuery = query.name.toLowerCase();
        return data.filter(x => x.name.toLowerCase().includes(lowerCaseQuery));
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

}
