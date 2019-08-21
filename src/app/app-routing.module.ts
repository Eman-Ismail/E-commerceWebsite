import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './e-commerceWebsite/product-list/product-list.module#ProductListModule'
  },
  {
    path: 'product-List',
    loadChildren: './e-commerceWebsite/product-list/product-list.module#ProductListModule'
  },
  {
    path: 'Cart',
    loadChildren: './e-commerceWebsite/cart/cart.module#CartModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
