import { Component, OnInit, Input } from '@angular/core';
import { Card, UnoDeck } from '../model/Uno';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {


  @Input() playerCards: Card[];
  @Input() playerNo: number;
  deck: UnoDeck = new UnoDeck();

  constructor() { }

  ngOnInit() {
  }

  public Start(): void {
      for (let i = 0; i < 7*7; i++)
        this.playerCards[i] = this.deck.take();
  }
}
