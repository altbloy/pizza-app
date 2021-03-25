import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderComponent } from './create/create.order.component';
import { OrderDetailsComponent } from './details/order-details.component';
import { OrderComponent } from './order.component';

const routes: Routes = [
  { path: '', component: OrderComponent },
  { path: 'create', component: CreateOrderComponent},
  { path:'details/:id', component: OrderDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class OrderRoutingModule { }
