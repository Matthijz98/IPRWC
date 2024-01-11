import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from "./webshop/nav-bar/nav-bar.component";
import {ProductDetailComponent} from "./webshop/product/product-detail/product-detail.component";
import {ProductCardComponent} from "./webshop/product/product-card/product-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent, ProductDetailComponent, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IPRWC';
}
