import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from "../product-card/product-card.component";
import {Product} from "../interfaces/product";
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})

export class HomePageComponent implements OnInit{
  products: Observable<Product> | undefined;

  ngOnInit() {
    this.productsService.get_products().subscribe((p) =>{
      console.log(p)
    })
  }

  constructor(private productsService: ProductService) {
  }


}
