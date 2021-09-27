import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProduct} from "../../models/Product/product";
import {ProductService} from "../../services/product/product.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  pageTitle: string = "Product list";
  imageDefaultWidth: number = 50;
  imageDefaultHeight: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  filteredProducts: IProduct[] = [];
  errorMessage: string = '';
  private _listFilter: string = '';
  sub!: Subscription;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;

    this.filteredProducts = this.performFilter(value);
  }

  products: IProduct[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy))
  }

  onNotify(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
