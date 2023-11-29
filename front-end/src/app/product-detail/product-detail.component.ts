import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent{

}
