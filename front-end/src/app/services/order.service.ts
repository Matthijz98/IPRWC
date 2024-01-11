import { HttpClient } from '@angular/common/http';
import {Order} from "../interfaces/order";
import {Injectable} from "@angular/core";
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService{
  private orderCreatedSource = new Subject<Order>();
  orderCreated$ = this.orderCreatedSource.asObservable();

  constructor(private http: HttpClient,) { }

  get_orders(){
    return this.http.get<Order[]>('http://localhost:8080/private/orders/')
  }

  get_order(id: number){
    return this.http.get<Order>('http://localhost:8080/private/orders/' + id)
  }

  create_order(name: string, description: string, price: number){
    const newOrder = { name: name, description: description, price: price };
    return this.http.post<Order>('http://localhost:8080/public/orders', newOrder)
  }

  del_order(id: number){
    return this.http.delete<Order>('http://localhost:8080/private/orders/' + id)
  }
}
