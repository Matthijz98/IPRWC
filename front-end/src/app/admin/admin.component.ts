import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminUserCardComponent} from "./admin-user-card/admin-user-card.component";
import {AdminOrderCardComponent} from "./order/admin-order-card/admin-order-card.component";
import {AdminProductCardComponent} from "./product/admin-product-card/admin-product-card.component";


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, AdminOrderCardComponent, AdminProductCardComponent, AdminUserCardComponent, AdminOrderCardComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
