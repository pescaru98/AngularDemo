import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IProduct} from "../../models/Product/product";

//in tutorial, selector is deleted
@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = "Product details";
  /*
  We can't use "!" operator, since we have to wait for a HTTP request to get the product,
  and it can take longer. Thus, we use "IProduct | undefined"
   */
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle = `Product details: ${id}`;
    this.product = {
      'productId': id,
      'productName': 'MSI Laptop',
      'productCode': 'MSI-GGD-2',
      'releaseDate': '22-06-2019',
      'description': 'Best one',
      'price': 1250,
      'starRating': 4.9,
      'imageUrl': 'assets/images/default-logo.png'
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
