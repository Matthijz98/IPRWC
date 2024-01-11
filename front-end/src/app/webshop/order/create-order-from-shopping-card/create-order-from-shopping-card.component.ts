import {Component, Input} from '@angular/core';
import {Product} from "../../../interfaces/product";
import {OrderService} from "../../../services/order.service";
import {FormsModule} from "@angular/forms";
import {LoginRequiredComponent} from "../../../auth/login-required/login-required.component";
import {Router} from "@angular/router";

export interface OrderForm {
  fullname: string;
  street: string;
  number: string;
  city: string;
}

@Component({
  selector: 'app-create-order-from-shopping-card',
  standalone: true,
  imports: [
    FormsModule,
    LoginRequiredComponent
  ],
  templateUrl: './create-order-from-shopping-card.component.html',
  styleUrl: './create-order-from-shopping-card.component.css'
})
export class CreateOrderFromShoppingCardComponent {
  @Input() cartData: {product: Product, quantity: number}[] = [];

  orderForm: OrderForm = {
    fullname: '',
    street: '',
    number: '',
    city: ''
  };

  constructor(private orderService: OrderService, private router: Router) {}

  onSubmit() {
    const orderData = {
      byUser: 1, // replace this with the actual user ID
      address: {
        fullName: this.orderForm.fullname,
        street: this.orderForm.street,
        number: this.orderForm.number,
        city: this.orderForm.city
      },
      orderDetails: this.cartData.map(item => ({
        quantity: item.quantity,
        productId: item.product.id
      }))
    };

    this.orderService.create_order(orderData).subscribe(response => {
      console.log(response);
      // if order was created successfully, clear the cart and redirect to the order details page
      this.cartData = [];
      // send to the order page
      this.router.navigate(['/account/order', response.id]);
    });
  }
}
