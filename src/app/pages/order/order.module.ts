import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { CreateOrderComponent } from './create/create.order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { OrderService } from 'src/app/services/order.service';
import { RouterModule } from '@angular/router';
import { OrderDetailsComponent } from './details/order-details.component';

@NgModule({
  declarations: [
    OrderComponent,
    CreateOrderComponent,
    OrderDetailsComponent,
    ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule
  ],
  providers:[OrderService]
})
export class OrderModule { }
