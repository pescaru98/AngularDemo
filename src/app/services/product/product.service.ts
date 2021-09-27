import {Injectable} from '@angular/core';
import {IProduct} from "../../models/Product/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): IProduct[] {
    return [{
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
  }

  constructor() {
  }
}
