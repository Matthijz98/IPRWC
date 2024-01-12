import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {NavBarComponent} from "../../nav-bar/nav-bar.component";
import {ProductService} from "../../../services/product.service";
import {Product} from "../../../interfaces/product";
import {CartService} from "../../../services/card.service";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {
  product: any
  productId: number = 0

  buttonText: string = 'Add to cart';
  buttonClass: string = 'mt-4 bg-gray-900 text-white px-4 py-2 rounded';

  constructor(private productsService: ProductService, private route: ActivatedRoute, private cartService: CartService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.productsService.get_product(this.productId).subscribe((product: Product) => {
        this.product = product;
      });
    });
  }

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
