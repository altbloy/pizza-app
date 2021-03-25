import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BasketItem } from 'src/app/models/basketItem';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit,OnDestroy {

  constructor(private basket:BasketService, private router: Router) { }

  private subscriptions:Subscription[]= [];
  items:BasketItem[] = [];
  fullPrice:number = 0;

  ngOnInit(): void {
    this.updateView(this.basket.getList());
    this.subscriptions.push(this.basket.BasketChangeEvent.subscribe(x=>this.updateView(x)));
  }

  public remove(id:number){
    this.basket.removeProduct(id);
  }
  public order(){
    this.router.navigate(['/order'])
  }

  private updateView(list:BasketItem[]){
    this.items = [...list];
    this.fullPrice = 0;
    this.items.forEach(x=>this.fullPrice+=(x.count*x.pizza.price));
  }

  public clean(){
    this.basket.clean();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x=>x.unsubscribe());
  }
}
