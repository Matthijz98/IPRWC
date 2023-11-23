import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HelloComponentComponent} from "./hello-component/hello-component.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {Product} from "./models/product";
import {ProductDetailComponent} from "./product-detail/product-detail.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HelloComponentComponent, NavBarComponent, ProductDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IPRWC';

  Producten: Product[] = [
    new Product("Product 1", 1.00),
    new Product("Product 2", 2.00),
  ]
}
