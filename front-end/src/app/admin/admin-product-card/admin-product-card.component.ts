import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from "../../services/product.service";
import {Product} from "../../interfaces/product";
import {NgxSmartModalModule} from "ngx-smart-modal";
import {CreateProductComponent} from "../product/create-product/create-product.component";

@Component({
  selector: 'app-admin-product-card',
  standalone: true,
  imports: [
    CommonModule,
    NgxSmartModalModule,
    CreateProductComponent,
  ],
  templateUrl: './admin-product-card.component.html',
  styleUrl: './admin-product-card.component.css',
  providers: [
    ProductService,
  ],
})
export class AdminProductCardComponent implements OnInit{
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.get_products().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  onProductCreated(newProduct: Product) {
    this.products.push(newProduct);
  }

  onDeleteProduct(productId: number) {
    this.productService.del_product(productId).subscribe(() => {
      this.products = this.products.filter(product => product.id !== productId);
    });
  }
}
