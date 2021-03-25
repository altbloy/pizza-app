import { BasketItem } from "./basketItem";

export interface Order {
    id: number,
    data : BasketItem[],
    status: OrderStatus
}

export enum OrderStatus {
    Created,
    InProgress,
    Delivery,
    Fineshed
}