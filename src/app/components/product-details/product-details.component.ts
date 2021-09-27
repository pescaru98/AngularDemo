import { Component, OnInit } from '@angular/core';

//in tutorial, selector is deleted
@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = "Product details";
  constructor() { }

  ngOnInit(): void {
  }

}
