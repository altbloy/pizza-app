import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../../components/basket/list/list.component';
import { BasketComponent } from '../../components/basket/basket/basket.component';
import { RouterModule } from '@angular/router';
import { OrderStatusPipe } from 'src/app/pipes/order-status.pipe';
import { CountButtonComponent } from '../../components/count-button/count-button.component';
import { WeightPipe } from 'src/app/pipes/weight.pipe';



@NgModule({
  declarations: [
    ListComponent,
    BasketComponent,
    OrderStatusPipe,
    CountButtonComponent,
    WeightPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ListComponent,
    BasketComponent,
    OrderStatusPipe,
    CountButtonComponent,
    WeightPipe
  ]
})
export class SharedModule { }
