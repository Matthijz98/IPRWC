import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";
import {Product} from "../../../interfaces/product";
import {CartService} from "../../../services/card.service";



@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  buttonText: string = 'Add to cart';
  buttonClass: string = 'mt-4 bg-gray-900 text-white px-4 py-2 rounded';
  @Input('product') product!: Product;

  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addProduct(product);

    this.buttonText = 'Added to cart';
    this.buttonClass = 'mt-4 bg-green-500 text-white px-4 py-2 rounded';

    setTimeout(() => {
      this.buttonText = 'Add to cart';
    }, 2000);

    setTimeout(() => {
      this.buttonClass = 'mt-4 bg-gray-900 text-white px-4 py-2 rounded';
    }, 2000);
  }
}
