import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  
  gridColumns = 3;

  cardData= [
    {id: '1', image: 'assets/des-1.jpg', title:'MULTIPLY YOUR POINTS' },
    {id: '2', image: 'assets/des-2.jpg', title:'GET AWAY & SAVE MORE'},
    {id: '3', image: 'assets/des-3.jpg', title:'EARN UP TO 130K POINTS'},
    {id: '4', image: 'assets/des-4.jpg', title:'A NIGHT ON US'},
    {id: '5', image: 'assets/des-1.jpg', title:'3 NIGHTS UNDER $250'},
    {id: '6', image: 'assets/des-3.jpg', title:'EARN UP TO 3X PINTS'}
  ];
}
