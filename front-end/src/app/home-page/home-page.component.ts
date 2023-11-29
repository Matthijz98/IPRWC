import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardComponent} from "../product-card/product-card.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
    imports: [CommonModule, ProductCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
