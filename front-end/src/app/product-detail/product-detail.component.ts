import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {Product} from "../interfaces/product";
import {ProductService} from "../services/product.service";
import { ActivatedRoute } from '@angular/router';

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

  constructor(private productsService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.productsService.get_product(this.productId).subscribe((product: Product) => {
        this.product = product;
      });
    });


  }

}
