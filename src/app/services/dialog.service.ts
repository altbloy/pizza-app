import { ComponentFactoryResolver, ComponentRef, EventEmitter, Injectable, Injector, ReflectiveInjector, Type, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private modalBlock!: ViewContainerRef;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public init(block: ViewContainerRef) {
    this.modalBlock = block;
  }

  public showDialog<T extends ModalDialogBase>(type: Type<T>, header: string, description: string) {
    const dialog = this.createComponentWithData(type, { header: header, description: description });
    this.modalBlock.insert(dialog.hostView);
    const subject = dialog.instance.getDialogState();
    const sub = subject.subscribe(x => {
        dialog.destroy();
        sub.unsubscribe();
    });

    return subject;
  }

  private createComponent<T>(type: Type<T>): ComponentRef<T> {
    this.modalBlock.clear();
    const injector = Injector.create({
      providers: [],
      parent: this.modalBlock.injector
    });
    const factory = this.componentFactoryResolver.resolveComponentFactory(type);
    return factory.create(injector);
  }

  private createComponentWithData<T>(componentType: Type<T>, data: any): ComponentRef<T> {
    const component = this.createComponent(componentType);
    Object.assign(component.instance, data);
    component.changeDetectorRef.detectChanges();
    return component;
  }

}


export abstract class ModalDialogBase {
  header!:string;
  description!:string;
  public abstract getDialogState(): Subject<ModalDialogResult>;
}

export enum ModalDialogResult {
  Confirmed,
  Closed
}