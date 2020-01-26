import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './fbg/dashboard/dashboard.component';
import { HeadersComponent } from './fbg/headers/headers.component';
import { CardComponent } from './fbg/card/card.component';
import { CartComponent } from './fbg/card/cart/cart.component';
import { SliderComponent } from './fbg/card/slider/slider.component';
import { BannerComponent } from './fbg/card/banner/banner.component';
import { ProductComponent } from './fbg/card/product/product.component';
import { FooterComponent } from './fbg/card/footer/footer.component';
import { BackTopComponent } from './fbg/card/back-top/back-top.component';
import { ModalComponent } from './fbg/card/modal/modal.component';
import { ProductsComponent } from './fbg/products/products.component';
import { ProductDetailComponent } from './fbg/product-detail/product-detail.component';
import {FormsModule} from '@angular/forms';
import { ShoppingCartComponent } from './fbg/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeadersComponent,
    CardComponent,
    CartComponent,
    SliderComponent,
    BannerComponent,
    ProductComponent,
    FooterComponent,
    BackTopComponent,
    ModalComponent,
    ProductsComponent,
    ProductDetailComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
