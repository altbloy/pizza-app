import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _list: Pizza[] = [
    {
      id: 1,
      name: "Гавайская",
      description: "Там что-то внутри плавает",
      imageUrl: "https://eda.ru/img/eda/c620x415i/s2.eda.ru/StaticContent/Photos/120131085053/171027192707/p_O.jpg",
      ingredients: ["грибочки", "колбасня"],
      price: 300,
      weight: 2000
    },
    {
      id: 2,
      name: "Большая Гавайская",
      description: "Там что-то внутри плавает",
      imageUrl: "https://www.delonghi.com/Global/recipes/multifry/3.jpg",
      ingredients: ["грибочки", "колбасня"],
      price: 600,
      weight: 2000
    },
    {
      id: 3,
      name: "Большая Гавайская2",
      description: "Там что-то внутри плавает",
      imageUrl: "https://www.delonghi.com/Global/recipes/multifry/3.jpg",
      ingredients: ["грибочки", "колбасня"],
      price: 600,
      weight: 2000
    },
    {
      id: 4,
      name: "Большая Гавайская2",
      description: "Там что-то внутри плавает",
      imageUrl: "https://www.delonghi.com/Global/recipes/multifry/3.jpg",
      ingredients: ["грибочки", "колбасня"],
      price: 800,
      weight: 2000
    },
  ];
  constructor() { }

  public getPizzaList(): Observable<Pizza[]> {
    return of(this._list).pipe(delay(1000));
  }
}
