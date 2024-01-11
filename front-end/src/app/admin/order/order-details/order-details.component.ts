import { Component } from '@angular/core';
import {Order} from "../../../interfaces/order";
import {OrderService} from "../../../services/order.service";
import {CommonModule, DatePipe} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css',
  providers: [OrderService, DatePipe]
})
export class OrderDetailsComponent {
  order: any;
  order_id: number = 0;
  constructor(private orderService: OrderService, private datePipe: DatePipe, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.order_id = params['id'];
      this.orderService.get_order(this.order_id).subscribe((order: Order) => {
        this.order = order;
      });
    });
  }

  public formatDate(date: number): string {
    return <string>this.datePipe.transform(date, 'dd-MM-yyyy HH:mm');
  }


  deleteOrderDetail(id: number) {

  }
}
