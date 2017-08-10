import { Component, OnInit, Input } from '@angular/core';
import {Card, PlayerCard} from '../model/inventory';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  static DECK: string[]=["c0_00","c1_00","back"];

  @Input() cardList: Card[];

  constructor() { }

  ngOnInit() {
    const len = this.cardList.length;

    for (let i in HeaderComponent.DECK){
      this.cardList.push({
        id:i+len,
        name:HeaderComponent.DECK[i],
        imageUrl:"/assets/unocards/"+HeaderComponent.DECK[i]+".png"
      });

    }
  }

}
