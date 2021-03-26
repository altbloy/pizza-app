import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../../components/basket/list/list.component';
import { BasketComponent } from '../../components/basket/basket/basket.component';
import { RouterModule } from '@angular/router';
import { OrderStatusPipe } from 'src/app/pipes/order-status.pipe';
import { CountButtonComponent } from '../../components/count-button/count-button.component';
import { WeightPipe } from 'src/app/pipes/weight.pipe';
import { CheckboxListComponent } from '../../components/checkbox-list/checkbox-list.component';
import { ModalComponent } from '../../components/modal/modal/modal.component';
import { ModalDialogComponent } from '../../components/modal/modal/dialog/modal-dialog/modal-dialog.component';
import { DialogService } from 'src/app/services/dialog.service';



@NgModule({
  declarations: [
    ListComponent,
    BasketComponent,
    OrderStatusPipe,
    CountButtonComponent,
    WeightPipe,
    CheckboxListComponent,
    ModalComponent,
    ModalDialogComponent
  ],
  entryComponents:[ModalDialogComponent],

  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ListComponent,
    BasketComponent,
    OrderStatusPipe,
    CountButtonComponent,
    WeightPipe,
    CheckboxListComponent,
    ModalComponent
  ],
  providers:[DialogService]
})
export class SharedModule { }
