import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
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
  on_dashboard() {
    this.router.navigate(['dashboard']);
  }
}
