import { Routes } from '@angular/router';
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {AdminComponent} from "./admin/admin.component";
import {ShoppingCardComponent} from "./shopping-card/shopping-card.component";
import {LoginComponent} from "./auth/login/login.component";

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  // product details route
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'card', component: ShoppingCardComponent },
  { path: 'auth/login', component: LoginComponent },
];
