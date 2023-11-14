import { Component } from '@angular/core';



@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {

  images= [
    {
      category: 'Rooms & Suites',
      date:'',
      topic:'Shangri–La Circle Exclusive Member Rate with Breakfast',
      content: 'Exclusive Member Rate with Breakfast for Shangri-La Circle member.',
      offer:'From SGD 245.32 Average Per Night',
      source: 'assets/des-1.jpg'
    },
    {
      category: 'Rooms & Suites',
      date:'',
      topic:'Shangri–La Circle Exclusive Member Rate',
      content: 'Exclusive Member Rate for Shangri-La Circle member.',
      offer:'From SGD 218.06 Average Per Night',
      source: 'assets/des-2.jpg'
    },
    {
      category: 'Weddings',
      date:'01 Jan 2023 - 31 Dec 2023',
      topic:'Engagements and Registrations 2023',
      content: 'Begin your journey to matrimony with an intimate event for your loved ones.',
      offer:'',
      source: 'assets/des-4.jpg'
    }
  ];

}
