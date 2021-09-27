import {Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  cropWidth: number = 75;
  rating: number = 4;

  constructor() {
  }

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75 / 5;
  }


}
