import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductService} from "../../services/product.service";
import {Product} from "../../interfaces/product";
import {ProductCardComponent} from "../product/product-card/product-card.component";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  providers: [ProductService]
})

export class HomePageComponent implements OnInit {
  products: any

  ngOnInit() {
    this.productsService.get_products().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  constructor(private productsService: ProductService) {
  }

}
