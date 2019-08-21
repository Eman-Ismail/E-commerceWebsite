import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import { ToastrService } from 'ngx-toastr';
declare let $: any;
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // *Inject service
  constructor(
    private _productService: ProductServiceService,
    private toastr: ToastrService
  ) { }

  // ==================================
  // display all product 
  // ==================================
  productList = [];
  allProduct() {
    this._productService.getAllProduct()
      .subscribe(Response => {
        this.productList = Response;

      }, error => {
        this.toastr.error('can not retrive data ', error);
      })
  }
  // =======================
  // style quantity
  // =======================
  setQuantityColor(quantity) {
    if (quantity >= 10) {
      return '#96c58e';
    } else if (quantity <= 5) {
      return '#f45c5d';
    }
    else {
      return '#ffc107'
    }
  }

  // ============================
  // check product quantity
  // ===========================
  checkQuantity(productId: number) {
    this.getOneProduct(productId);
  }

  //--------variable to change in popup-----
  productExit: boolean = false;
  productNotExit: boolean = false;
  popupBtn: boolean = false;
  // =============================================================
  // when click add to cart ==> get this product to check his quantity
  // ==============================================================
  oneProduct = {};
  getOneProduct(id: number) {
    this._productService.getoneProductById(id)
      .subscribe(oneProductResponse => {
        this.oneProduct = oneProductResponse;

        $('#confirmModal').modal('show'); //show pop up

        // codition to display pop up depend on product quantity
        if (oneProductResponse.quantity > 0) {
          this.productExit = true;
          this.productNotExit = false;
          this.popupBtn = false;
        }
        else {
          this.productNotExit = true;
          this.productExit = false;
          this.popupBtn = true;
        }
      })
  }
  // ===============================================
  // when click save to confirm add product to cart
  // ===============================================
  saveProductToCart() {
    this._productService.sendProductToCart(this.oneProduct);
    $('#confirmModal').modal('hide');
    this.toastr.success('added to cart successfully')

  }



  ngOnInit() {
    this.allProduct();
  }

}
