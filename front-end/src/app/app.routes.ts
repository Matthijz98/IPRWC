import { Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {LoginComponent} from "./auth/login/login.component";
import {AuthGuard} from "./guards/auth.guard";
import {OrderDetailsComponent} from "./admin/order/order-details/order-details.component";
import {HomePageComponent} from "./webshop/home-page/home-page.component";
import {ProductDetailComponent} from "./webshop/product/product-detail/product-detail.component";
import {ShoppingCardComponent} from "./webshop/shopping-card/shopping-card.component";

export const routes: Routes = [
  { path: 'admin/order/:id', component: OrderDetailsComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: '', component: HomePageComponent },

  // product details route
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'card', component: ShoppingCardComponent },
  { path: 'auth/login', component: LoginComponent },
];
