import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  num_product: number = 1;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  add() {
    if (this.num_product < 10) {
      this.num_product += 1;
    }
  }

  reverse() {
    if (this.num_product > 1) {
      this.num_product -= 1;
    }
  }

  on_cart() {
    this.router.navigate(['fbg/shop_cart']);
  }

  on_dashboard() {
    this.router.navigate(['/dashboard']);
  }
}
