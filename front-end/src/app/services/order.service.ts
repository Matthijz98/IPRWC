import { HttpClient } from '@angular/common/http';
import {Order} from "../interfaces/order";
import {Injectable} from "@angular/core";
import {Subject} from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class OrderService{
  private orderCreatedSource = new Subject<Order>();
  orderCreated$ = this.orderCreatedSource.asObservable();

  constructor(private http: HttpClient,) { }

  get_orders(){
    return this.http.get<Order[]>(`${environment.apiUrl}/private/orders/`)
  }

  get_order(id: number){
    return this.http.get<Order>(`${environment.apiUrl}/private/orders/` + id)
  }

  create_order(orderData: any){
    return this.http.post<Order>(`${environment.apiUrl}/private/orders`, orderData)
  }

  del_order(id: number){
    return this.http.delete<Order>(`${environment.apiUrl}/private/orders/` + id)
  }
}
