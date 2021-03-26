import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalDialogBase, ModalDialogResult } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalDialogComponent extends ModalDialogBase {

	private modalState: Subject<ModalDialogResult|any> = new Subject();

  constructor() {
    super();
    this.header = "";
    this.description = "";
   }

	public getDialogState(): Subject<ModalDialogResult> {
		return this.modalState;
	}
	public confirm() {
		this.modalState.next(ModalDialogResult.Confirmed);
	}
	public close() {
		this.modalState.next(ModalDialogResult.Closed);
	}

}
