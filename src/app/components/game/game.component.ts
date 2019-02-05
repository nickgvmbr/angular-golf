import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

import { NewGame } from '../new-game/new-game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  constructor(public apiService: ApiService) { }

  // get holes

  game: NewGame;
  holes$: [];

  ngOnInit() {
    this.game = JSON.parse(sessionStorage.getItem('game'));

    if (this.game)
      this.apiService.getHoles(this.game.tee).subscribe(res => this.holes$ = res);
  }

}
