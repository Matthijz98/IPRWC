import {User} from "./user";
import {Product} from "./product";

interface OrderDetail {
  id: number;
  quantity: number;
  product: Product;
}

export interface Order {
  id: number;
  orderTotal: number;
  orderDate: number;
  orderStatus: string;
  byUser: User;
  orderDetails: OrderDetail[];
}
