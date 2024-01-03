import { Component, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import {FormsModule} from "@angular/forms";
import {Product} from "../../../interfaces/product";

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css',
  providers: [
    ProductService,
  ]
})
export class CreateProductComponent {
  title: string = '';
  description: string = '';
  price: number = 0;

  @Output() productCreated = new EventEmitter<Product>();

  constructor(private productService: ProductService) {}

  onSubmit() {
    this.productService.create_product(this.title, this.description, this.price).subscribe((newProduct: Product) => {
      this.productCreated.emit(newProduct);
      // Reset form
      this.title = '';
      this.description = '';
      this.price = 0;
    });
  }
}
