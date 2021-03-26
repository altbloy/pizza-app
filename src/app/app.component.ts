import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BasketService } from './services/basket.service';
import { DialogService } from './services/dialog.service';
import { ModalDialogComponent } from './shared/components/modal/modal/dialog/modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'pizza-app';
  private subscriptions: Subscription[] = [];
  BasketItemCount: number = 0;

  constructor(private basket: BasketService,private dialogService:DialogService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.basket.BasketChangeEvent.subscribe(x=> {
        this.BasketItemCount = x.length;
      }
    ));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x=>x.unsubscribe());
  }
}
