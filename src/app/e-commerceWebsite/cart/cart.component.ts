import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // inject service
  constructor(private _cartService: ProductServiceService) { }

  // get all product that added to cart
  addtocart = [];
  allProductInCart() {
    if (this._cartService.opserveproduct) {
      this._cartService.opserveproduct.subscribe(res => {
        localStorage.setItem('cart', JSON.stringify(res));  //store in local storage 

      })
    }

    var cart = localStorage.getItem('cart');
    this.addtocart = JSON.parse(cart);

  }

  // try to delete one product from cart but this not required in task
  deleteFromCart(id: number) {
    // console.log(id);
    for (let i = 0; i < this.addtocart.length; i++) {
      if (this.addtocart[i].id = id) {
        var cart = localStorage.getItem('cart');
        this.addtocart = JSON.parse(cart);
        this.addtocart.splice(this.addtocart[i], 1); // delete item at index
        console.log(this.addtocart)

      }
    }

  }
  // ------------------
  ngOnInit() {
    this.allProductInCart()

  }

}
