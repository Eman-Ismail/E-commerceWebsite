import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  // Inject http 
  constructor(private _HttpClient: HttpClient) { }

  // ================================
  // function to get all product
  // ================================
  AllProduct_URL = 'https://my-json-server.typicode.com/AhmedMagdy1/ecommerce/products';
  getAllProduct(): Observable<any> {
    return this._HttpClient.get(this.AllProduct_URL);
  }

  // ================================
  // function to get one product by id
  // ================================
  oneProduct_URL = 'https://my-json-server.typicode.com/AhmedMagdy1/ecommerce/products';
  getoneProductById(id: number): Observable<any> {
    return this._HttpClient.get(`${this.oneProduct_URL}/${id}`);
  }

  // =============================================================
  // function to send product from product-list to cart component 
  // ==============================================================
  ProductSent = []
  opserveproduct;
  sendProductToCart(product) {
    this.ProductSent.push(product);
    if (product) {
      this.opserveproduct = Observable.create(observer => {
        observer.next(this.ProductSent);
        observer.complete();
      });
    }

  }




}
