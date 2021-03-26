import { PizzaAddition } from "./pizza-addition";

export interface Pizza {
    id:number,
    name:string,
    imageUrl:string,
    description:string,
    ingredients:string[],
    weight:number,
    price: number,
    additions?: PizzaAddition[];
}