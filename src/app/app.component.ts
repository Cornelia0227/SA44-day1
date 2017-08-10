import { Component, OnInit, OnDestroy } from '@angular/core';
import {Card, PlayerCard} from './model/inventory'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy{
  //title = 'app';

  static DECK: string[]=["c0_00","c1_00","back"];
  card:Card[] = [];
  playercards:PlayerCard[]=[];

  ngOnInit(){
    for(let i in AppComponent.DECK){
      this.card.push({
        id:i,
        name:AppComponent.DECK[i],
        imageUrl:"/assets/unocards/"+AppComponent.DECK[i]+".png"
      });
    }
  }

  ngOnDestroy(){
    
  }
}

