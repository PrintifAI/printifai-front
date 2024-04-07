import { CartItem } from './cartTypes';
import { Design } from './designTypes';

export type OrderResponse = {
    data: string;
    id: string;
    createdAt: string;
    status: OrderStatus;
};

export enum OrderStatus {
    Created = 'Created',
    Producing = 'Producing',
    Sending = 'Sending',
    Sent = 'Sent',
    Returned = 'Returned',
    Completed = 'Completed',
}

export type Order = {
    cart: CartItem[];
} & OrderFormData;

export type OrderFormData = {
    city: string;
    address: string;
    name: string;
    surname: string;
    deliveryWay: string;
    telegram: string;
    email: string;
    comment: string;
};
