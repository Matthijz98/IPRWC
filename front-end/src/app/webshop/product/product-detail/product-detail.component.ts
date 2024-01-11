import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {NavBarComponent} from "../../nav-bar/nav-bar.component";
import {ProductService} from "../../../services/product.service";
import {Product} from "../../../interfaces/product";

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
      console.log(this.productId);
      this.productsService.get_product(this.productId).subscribe((product: Product) => {
        this.product = product;
      });
    });


  }

}
