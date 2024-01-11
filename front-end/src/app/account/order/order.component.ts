import { Component } from '@angular/core';
import {OrderService} from "../../services/order.service";
import {CommonModule, DatePipe, NgForOf} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Order} from "../../interfaces/order";

@Component({
  selector: 'app-account-order',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class AccountOrderComponent {
  success: boolean = false;
  order: any;
  order_id: number = 0;
  constructor(private orderService: OrderService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.success = params['success'] === 'true';
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.order_id = params['id'];
      this.orderService.get_order(this.order_id).subscribe((order: Order) => {
        this.order = order;
      });
    });
  }
}
