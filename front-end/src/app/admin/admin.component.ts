import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminOrderCardComponent} from "./admin-order-card/admin-order-card.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, AdminOrderCardComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
