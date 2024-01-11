import { Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {LoginComponent} from "./auth/login/login.component";
import {AuthGuard} from "./guards/auth.guard";
import {OrderDetailsComponent} from "./admin/order/order-details/order-details.component";
import {HomePageComponent} from "./webshop/home-page/home-page.component";
import {ProductDetailComponent} from "./webshop/product/product-detail/product-detail.component";
import {ShoppingCardComponent} from "./webshop/shopping-card/shopping-card.component";
import {AccountPageComponent} from "./account/account-page/account-page.component";
import {AccountOrderComponent} from "./account/order/order.component";

export const routes: Routes = [
  { path: 'admin/order/:id', component: OrderDetailsComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: '', component: HomePageComponent },

  // Account routes
  { path: 'account', component: AccountPageComponent, canActivate: [AuthGuard] },
  { path: 'account/order/:id', component: AccountOrderComponent, canActivate: [AuthGuard] },

  // product details route
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'card', component: ShoppingCardComponent },
  { path: 'auth/login', component: LoginComponent },
];
