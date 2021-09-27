import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from "../../components/products/product-list.component";
import {ProductDetailsComponent} from "../../components/product-details/product-details.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ProductDetailsGuard} from "../../guards/ProductDetailsGuard/product-details.guard";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {
        path: 'products/:id',
        canActivate: [ProductDetailsGuard],
        component: ProductDetailsComponent
      }
      ])
  ]
})
export class ProductsModule { }
