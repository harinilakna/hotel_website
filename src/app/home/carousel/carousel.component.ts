import { Component} from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent{

  slideIndex = 0;

  constructor() {
   
  }

  openDatePicker(inputElement: HTMLInputElement): void {
    inputElement.click();
  }
}
