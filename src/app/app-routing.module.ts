import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketGuard } from './guardians/basket.guard';
import { PizzaListComponent } from './pages/pizza-list/pizza-list.component';

const routes: Routes = [
  { path:'',component: PizzaListComponent , canDeactivate:[BasketGuard]},
  { path:'order', loadChildren: () => import('./pages/order/order.module').then(m => m.OrderModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
