import { Component, OnInit } from '@angular/core';

import { NewGame } from '../new-game/new-game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  constructor() { }

  game: NewGame;
  ngOnInit() {
    this.game = JSON.parse(sessionStorage.getItem('game'));
  }

}
