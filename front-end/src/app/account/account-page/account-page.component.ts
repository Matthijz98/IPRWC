import { Component } from '@angular/core';
import {OrdersComponent} from "../orders/orders.component";

@Component({
  selector: 'app-account-page',
  standalone: true,
  imports: [
    OrdersComponent
  ],
  templateUrl: './account-page.component.html',
  styleUrl: './account-page.component.css'
})
export class AccountPageComponent {

}
