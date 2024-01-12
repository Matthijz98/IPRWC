import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../interfaces/product";
import {OrderService} from "../../../services/order.service";
import {FormsModule} from "@angular/forms";
import {LoginRequiredComponent} from "../../../auth/login-required/login-required.component";
import {Router} from "@angular/router";
import {CartService} from "../../../services/card.service";
import {AuthService} from "../../../services/auth.service";
import {AddressService} from "../../../services/address.service";
import {Address} from "../../../interfaces/address";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-create-order-from-shopping-card',
  standalone: true,
  imports: [
    FormsModule,
    LoginRequiredComponent,
    CommonModule
  ],
  templateUrl: './create-order-from-shopping-card.component.html',
  styleUrl: './create-order-from-shopping-card.component.css'
})
export class CreateOrderFromShoppingCardComponent implements OnInit {
  @Input() cartData: { product: Product, quantity: number }[] = [];

  addresses: Address[] = [];
  address: number = 0;

  newAddress = {
    fullName: '',
    street: '',
    number: '',
    city: '',
  };

  constructor(
    private orderService: OrderService,
    private router: Router,
    private cartService: CartService,
    private addressService: AddressService,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.loadAddresses();
  }

  loadAddresses() {
    this.addressService.get_addresses().subscribe(addresses => {
      this.addresses = addresses;
    });
  }

  onSubmit() {
    const orderData = {
      byUser: null,
      addressId: this.address,
      orderDetails: this.cartData.map(item => ({
        quantity: item.quantity,
        productId: item.product.id
      }))
    };

    this.orderService.create_order(orderData).subscribe(response => {
      // if order was created successfully, clear the cart and redirect to the order details page
      this.cartService.clearCart();
      // send to the order page
      this.router.navigate(['/account/order', response.id], {queryParams: {success: true}});
    });

  }

  createAddress() {
    this.addressService.create_address(this.newAddress).subscribe(address => {
      // update the addresses array and the selected address
      this.addresses.push(address);
      this.address = address.id;
    });
  }
}
