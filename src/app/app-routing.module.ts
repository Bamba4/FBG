import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './fbg/dashboard/dashboard.component';
import {ProductsComponent} from './fbg/products/products.component';
import {ProductComponent} from './fbg/card/product/product.component';
import {ProductDetailComponent} from './fbg/product-detail/product-detail.component';
import {ShoppingCartComponent} from './fbg/shopping-cart/shopping-cart.component';


const routes: Routes = [
  { path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
  },
  {path: 'produits', component: ProductComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Dashboard' }
  },
  {
    path: 'produits/produits_detail',
    component: ProductDetailComponent
  },
  {
    path: 'fbg/shop_cart',
    component: ShoppingCartComponent
  }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
