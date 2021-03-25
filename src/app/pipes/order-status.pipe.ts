import { Pipe, PipeTransform } from '@angular/core';
import { OrderStatus } from '../models/order';

@Pipe({
  name: 'orderStatus'
})
export class OrderStatusPipe implements PipeTransform {

  transform(value: OrderStatus): string {
    var result = ""
    switch(value)
    {
      case OrderStatus.Created : result = "Создан"; break;
      case OrderStatus.InProgress : result = "Готовится"; break;
      case OrderStatus.Delivery : result = "Доставляется"; break;
      case OrderStatus.Fineshed : result = "Завершен"; break;
    }
    return result;
  }

}
