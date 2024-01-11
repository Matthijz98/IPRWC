import {User} from "./user";

export interface Order {
  id: number;
  orderTotal: number;
  orderDate: number;
  orderStatus: string;
  byUser: User;
}
