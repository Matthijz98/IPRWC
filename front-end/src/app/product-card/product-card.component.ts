import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";
import {Product} from "../interfaces/product";
import {CartService} from "../services/card.service";


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input('product') product!: Product;

  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addProduct(product);
  }
}
