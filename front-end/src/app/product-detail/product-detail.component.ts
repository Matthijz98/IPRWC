import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Product} from "../models/product";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent  implements OnInit{
  product: Product;

  constructor() {}

}
