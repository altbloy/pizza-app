import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private orderService: OrderService) { }
  
  orderList$!: Observable<Order[]>;

  ngOnInit(): void {
    this.orderList$ = this.orderService.OrderSChangeEvent.pipe(
      startWith(this.orderService.getList())
    );
  }

}
