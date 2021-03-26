import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { PizzaAddition } from 'src/app/models/pizza-addition';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-pizza-panel',
  templateUrl: './pizza-panel.component.html',
  styleUrls: ['./pizza-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PizzaPanelComponent implements OnInit {
  @Input() item!: Pizza;
  private count:number = 1;
  constructor(private basket:BasketService) { }

  ngOnInit(): void {
  }
  public CountHandler(value:number){
    this.count = value;
    console.log(value);
  }
  public AdditionHander(list:PizzaAddition[])
  {
    console.log(this.item.additions);
    this.item.additions = list;
  }
  public AddToBasket(){
    this.basket.addItem(JSON.parse(JSON.stringify({count:this.count,pizza:this.item})));
  }
}
