import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderService} from "../../services/order.service";
import {Order} from "../../interfaces/order";
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-admin-order-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-order-card.component.html',
  styleUrl: './admin-order-card.component.css',
  providers: [
    OrderService,
    DatePipe
  ],
})
export class AdminOrderCardComponent implements OnInit{

  orders: Order[] = [];
  constructor(private orderService: OrderService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.orderService.get_orders().subscribe((orders: Order[]) => {
      this.orders = orders;
    });
  }

  public formatDate(date: number): string {
    return <string>this.datePipe.transform(date, 'dd-MM-yyyy HH:mm');
  }

}
