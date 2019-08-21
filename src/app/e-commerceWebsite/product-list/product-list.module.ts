import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { SubDetailePipe } from '../pipes/sub-detaile.pipe';

@NgModule({
  declarations: [
    ProductListComponent,
    SubDetailePipe

  ],
  imports: [
    CommonModule,
    ProductListRoutingModule
  ]
})
export class ProductListModule { }
