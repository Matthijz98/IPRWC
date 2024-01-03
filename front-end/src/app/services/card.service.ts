import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: {product: Product, quantity: number}[] = [];

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  constructor(private cookieService: CookieService) {
    const cartCookie = this.cookieService.get('cart');
    if (cartCookie) {
      this.cart = JSON.parse(cartCookie);
    }
  }

  addProduct(product: Product) {
    const cartItem = this.cart.find(item => item.product.id === product.id);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      this.cart.push({product, quantity: 1});
    }
    this.cookieService.set('cart', JSON.stringify(this.cart));
  }

  removeProduct(product: Product) {
    const index = this.cart.findIndex(item => item.product.id === product.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
    this.cookieService.set('cart', JSON.stringify(this.cart));
  }

  increaseQuantity(product: Product) {
    const cartItem = this.cart.find(item => item.product.id === product.id);
    if (cartItem) {
      cartItem.quantity++;
    }
    this.cookieService.set('cart', JSON.stringify(this.cart));
  }

  decreaseQuantity(product: Product) {
    const cartItem = this.cart.find(item => item.product.id === product.id);
    if (cartItem) {
      cartItem.quantity--;
      if (cartItem.quantity === 0) {
        this.removeProduct(product);
      }
    }
    this.cookieService.set('cart', JSON.stringify(this.cart));
  }
}
