import { Component } from '@angular/core';
import {OrderService} from "../../services/order.service";
import {DatePipe, NgForOf} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Order} from "../../interfaces/order";

@Component({
  selector: 'app-account-order',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class AccountOrderComponent {
  order: any;
  order_id: number = 0;
  constructor(private orderService: OrderService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.order_id = params['id'];
      this.orderService.get_order(this.order_id).subscribe((order: Order) => {
        this.order = order;
      });
    });
  }
}
