import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { BasketService } from './services/basket.service';
import { DialogService } from './services/dialog.service';
import { ModalDialogComponent } from './shared/components/modal/modal/dialog/modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pizza-app';

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
  }

  @HostListener('window:beforeunload', ['$event'])
  onWindowClose(event: any): void {
    if (this.basketService.getList().length > 0) {
      event.preventDefault();
      event.returnValue = "корзина не пуста, точно хотите уйти?";
    }
  }
}
