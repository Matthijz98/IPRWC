import {Component, OnInit, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {CommonModule} from "@angular/common";
import {Product} from "../../../interfaces/product";
import {ProductService} from "../../../services/product.service";
import {User} from "../../../interfaces/user";
import {OrderService} from "../../../services/order.service";
import {Order} from "../../../interfaces/order";
import {Address} from "../../../interfaces/address";
import {AddressService} from "../../../services/address.service";

interface ngOnInit {
}

@Component({
  selector: 'app-order-create',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './order-create.component.html',
  styleUrl: './order-create.component.css'
})
export class OrderCreateComponent implements OnInit {
  users: User[] = [];
  user: number = 0;
  products: Product[] = [];
  orderLines: { product: Product, quantity: number }[] = [];

  address: number | null = null;
  addresses: Address[] = [];

  constructor(
    private userService: UserService,
    private productService: ProductService,
    private orderService: OrderService,
    private addressService: AddressService) {
  }

  ngOnInit(): void {
    this.userService.get_users().subscribe((data: any) => {
      this.users = data;
    });

    this.productService.get_products().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  addProductLine() {
    this.orderLines.push({product: this.products[0], quantity: 1});
  }

  onSubmit() {
    const orderData = {
      byUser: this.user,
      addressId: this.address,
      orderDetails: this.orderLines.map(orderLine => ({
        productId: orderLine.product.id,
        quantity: orderLine.quantity
      }))
    };

    this.orderService.create_order(orderData).subscribe((newOrder: Order) => {
      this.orderLines = [];
      this.user = 0;
    });
  }

  removeProductLine(i: number) {
    this.orderLines.splice(i, 1);
  }

  onUserChange() {
    console.log(this.user);
    this.addressService.get_addresses_by_user(this.user).subscribe((addresses: Address[]) => {
      this.addresses = addresses;
    });
  }
}
