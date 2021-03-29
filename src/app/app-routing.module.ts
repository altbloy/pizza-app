import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketGuard } from './guardians/basket.guard';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PizzaListComponent } from './pages/pizza-list/pizza-list.component';

const routes: Routes = [
  {
    path: '',
    canDeactivate: [BasketGuard],
    component: MainPageComponent,
    children: [
      { path: '', component: PizzaListComponent},
      { path: 'order', loadChildren: () => import('./pages/order/order.module').then(m => m.OrderModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
