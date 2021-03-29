import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppComponent } from '../app.component';
import { MainPageComponent } from '../pages/main-page/main-page.component';
import { PizzaListComponent } from '../pages/pizza-list/pizza-list.component';
import { BasketService } from '../services/basket.service';
import { DialogService } from '../services/dialog.service';
import { ModalDialogComponent } from '../shared/components/modal/modal/dialog/modal-dialog/modal-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class BasketGuard implements CanDeactivate<MainPageComponent> {
  constructor(private basketService: BasketService, private dialogService: DialogService) { }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.basketService.getList().length > 0) {
      return this.dialogService.showDialog(ModalDialogComponent, "Внимание!", "корзина не пуста, точно хотите уйти?")
        .pipe(
          map(x => {
            if (x == 0)
              return true;
            else return false;
          })
        );
    }
    else return true;
  }

}
