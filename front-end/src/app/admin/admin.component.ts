import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminOrderCardComponent} from "./admin-order-card/admin-order-card.component";
import {AdminProductCardComponent} from "./admin-product-card/admin-product-card.component";
import {AdminUserCardComponent} from "./admin-user-card/admin-user-card.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, AdminOrderCardComponent, AdminProductCardComponent, AdminUserCardComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
