import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../models/Product/product";


@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = "Product list";
  imageDefaultWidth: number = 50;
  imageDefaultHeight: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  private _listFilter: string = '';
  filteredProducts: IProduct[] = [];

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;

    this.filteredProducts = this.performFilter(value);
  }

  products: IProduct[] = [{
    "productId": 1,
    "productName": "Dell Laptop",
    "productCode": "GGF-423-DD",
    "releaseDate": "19-02-2021",
    "description": "Gaming Laptop",
    "price": 2000,
    "starRating": 4.3,
    "imageUrl": "assets/images/default-logo.png"
  },
    {
      "productId": 2,
      "productName": "Lenovo Monitor",
      "productCode": "TRZ-55-YY",
      "releaseDate": "04-05-2021",
      "description": "144Hz Monitor",
      "price": 600,
      "starRating": 3.7,
      "imageUrl": "assets/images/default-logo.png"
    },
    {
      "productId": 3,
      "productName": "Lenovo Gaming PC",
      "productCode": "PPI-612-LE",
      "releaseDate": "24-10-2020",
      "description": "Best deal on PCs",
      "price": 2330,
      "starRating": 4.7,
      "imageUrl": "assets/images/default-logo.png"
    }];

  constructor() {
  }

  ngOnInit(): void {
    this.listFilter = 'cart';
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
