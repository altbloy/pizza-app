import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BasketItem } from 'src/app/models/basketItem';
import { Order, OrderStatus } from 'src/app/models/order';
import { BasketService } from 'src/app/services/basket.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  templateUrl: './create.order.component.html',
  styleUrls: ['./create.order.component.css']
})
export class CreateOrderComponent implements OnInit, OnDestroy {

  constructor(private basket: BasketService, private orderService: OrderService, private router: Router) { }

  private _subcribes: Subscription[] = [];

  orderForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{11}")]),
    address: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  isActive: boolean = false;
  price: number = 0;
  list: BasketItem[] = [];

  ngOnInit(): void {
    var list = this.basket.getList();
    this.isActive = list.length > 0;

    if (this.isActive) {
      list.forEach(x => this.price += (x.pizza.price * x.count))
      this.list = [...list];
    }
  }

  public onSubmit() {
    if (this.orderForm.valid) {
      this.orderForm.disable();
      var basketItems = this.basket.getList();
      var item: Order = { id: 0, data: basketItems, status: OrderStatus.Created };
      this._subcribes.push(this.orderService.createOrder(item).subscribe(x => {
        this.router.navigate(['/order/details/' + x]);
      }));
    }
  }

  ngOnDestroy(): void {
    this._subcribes.forEach(x => x.unsubscribe());
  }

}
