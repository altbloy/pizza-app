
import { EventEmitter, Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { delay, take } from 'rxjs/operators';
import { Order, OrderStatus } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private idCounter: number = 0;
  private _list: Order[] = [];
  OrderSChangeEvent = new EventEmitter<Order[]>();
  constructor() {

  }

  createOrder(order: Order): Observable<number> {
    this.idCounter++;
    order.id = this.idCounter;
    order.status = OrderStatus.Created;
    this._list.unshift(order);
    this.OrderSChangeEvent.emit(this._list);

    interval(7000).pipe(
      take(4)
    ).subscribe(x => {
      console.log("timer" + x);
      switch (order.status) {
        case OrderStatus.Created: order.status = OrderStatus.InProgress; break;
        case OrderStatus.InProgress: order.status = OrderStatus.Delivery; break;
        case OrderStatus.Delivery: order.status = OrderStatus.Fineshed; break;
      }

      this.OrderSChangeEvent.emit(this._list);
    });
    return of(order.id).pipe(delay(1000));
  }

  getList(): Order[] {
    return [...this._list];
  }

  getOrder(id: number): Observable<Order> {
    var result = this._list.filter(x => x.id == id);
    return of(result[0]).pipe(delay(1000));
  }
}
