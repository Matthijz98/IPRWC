import {Component, importProvidersFrom, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from "../../services/product.service";
import {Product} from "../../interfaces/product";
import {NgxSmartModalModule} from "ngx-smart-modal";

@Component({
  selector: 'app-admin-product-card',
  standalone: true,
  imports: [
    CommonModule,
    NgxSmartModalModule,],
  templateUrl: './admin-product-card.component.html',
  styleUrl: './admin-product-card.component.css',
  providers: [
    ProductService,
  ],


})
export class AdminProductCardComponent implements OnInit{
  products: any

  ngOnInit() {
    this.productsService.get_products().subscribe((products: Product[]) => {
      this.products= products;
    });
  }

  constructor(private productsService: ProductService) {
  }
}
