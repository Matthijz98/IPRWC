import { Component } from '@angular/core';
import {OrderService} from "../../services/order.service";
import {CommonModule, DatePipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Order} from "../../interfaces/order";

@Component({
  selector: 'app-account-orders',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
  providers: [
    OrderService,
    DatePipe
  ],
})
export class OrdersComponent {
  orders: Order[] = [];

  constructor(private orderService: OrderService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.orderService.get_orders().subscribe((orders: Order[]) => {
      this.orders = orders;
    });
  }

  public formatDate(date: number): string {
    return <string>this.datePipe.transform(date, 'dd-MM-yyyy');
  }
}
