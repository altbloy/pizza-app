import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private orderService:OrderService) { }

  order$!: Observable<Order>;

  ngOnInit(): void {
    this.order$ = this.route.paramMap.pipe(
      switchMap(p=>{
        var id = Number(p.get('id'));
        return this.orderService.getOrder(id);
      })
    )
  }

}
