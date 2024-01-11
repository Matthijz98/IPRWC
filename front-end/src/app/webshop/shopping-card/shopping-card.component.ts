import { Component, OnInit } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Product} from "../../interfaces/product";
import {CartService} from "../../services/card.service";
import {
  CreateOrderFromShoppingCardComponent
} from "../order/create-order-from-shopping-card/create-order-from-shopping-card.component";

@Component({
  selector: 'app-shopping-card',
  standalone: true,
  imports: [
    NgForOf,
    CreateOrderFromShoppingCardComponent
  ],
  templateUrl: './shopping-card.component.html',
  styleUrl: './shopping-card.component.css'
})
export class ShoppingCardComponent implements OnInit {
  cart: {product: Product, quantity: number}[] = [];

  get totalPrice() {
    return this.cartService.getTotalPrice();
  }

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cart = this.cartService.cart;
  }

  increaseQuantity(product: Product) {
    this.cartService.increaseQuantity(product);
  }

  decreaseQuantity(product: Product) {
    this.cartService.decreaseQuantity(product);
  }
}
