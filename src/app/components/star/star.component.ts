import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  cropWidth: number = 75;
  @Input() rating: number = 4;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() {
  }

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75 / 5;
  }

  onClick() {
    console.log(`Rating ${this.rating}`);
    this.ratingClicked.emit(`Rating ${this.rating} was clicked!`);
  }

}
