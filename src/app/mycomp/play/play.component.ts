import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  constructor() { }


  @Input() playerNum:number;

  ngOnInit() {
    this.playerNum=2;
  }

  public AddPlayers():void{
    if(this.playerNum<7){
      this.playerNum++;
    }
  }

  public RemovePlayers():void{
    if(this.playerNum>2){
      this.playerNum--;
    }
  }

}
