import { EventEmitter, Injectable } from '@angular/core';
import { BasketItem } from '../models/basketItem';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private _list: BasketItem[]=[];

  BasketChangeEvent = new EventEmitter<BasketItem[]>();
  constructor() { }

  public getList():BasketItem[]{
    return [...this._list];
  }

  public addItem(item:BasketItem) {
    var exist = this._list.filter(x=>x.pizza.id == item.pizza.id);

    if(exist.length != 0){
      exist[0].count= exist[0].count + item.count;
    }
    else {
      item.id = this._list.length;
      this._list.push(item);
    }
    this.BasketChangeEvent.emit(this._list);
  }

  public removeProduct(id:number)
  {
    this._list = this._list.filter(x=>x.pizza.id!=id);
    this._list.forEach((x,i)=>x.id = i +1);
    this.BasketChangeEvent.emit(this._list);
  }

  public clean(){
    this._list = [];
    this.BasketChangeEvent.emit(this._list);
  }
}
