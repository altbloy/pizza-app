import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements AfterViewInit {

  constructor(private dialogService: DialogService) { }

  @ViewChild('modalBlock',{ read: ViewContainerRef }) block!: ViewContainerRef;

  ngAfterViewInit(): void {
    this.dialogService.init(this.block);
  }

}
