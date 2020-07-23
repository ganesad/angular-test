import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { NewProductsComponent } from './products/new-products/new-products.component';
import { PopularProductsComponent } from './products/popular-products/popular-products.component';
import { FutureProductsComponent } from './products/future-products/future-products.component';



@NgModule({
  declarations: [ProductsComponent, CustomersComponent, NewProductsComponent, PopularProductsComponent, FutureProductsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CustomersComponent,
    ProductsComponent,
  ]
})
export class InfoModule { }
