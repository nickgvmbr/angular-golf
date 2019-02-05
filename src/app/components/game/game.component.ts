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

  // get holes & totals

  game: NewGame;
  holes$: [];

  parTotal$: number;
  yardsTotal$: number;

  ngOnInit() {
    this.game = JSON.parse(sessionStorage.getItem('game'));

    if (this.game)
      this.apiService.getHoles(this.game.tee)
        .subscribe(res => {
          this.holes$ = res,
          this.parTotal$ = res.map(i => i['par']).reduce((a, b) => a + b, 0),
          this.yardsTotal$ = res.map(i => i['yards']).reduce((a, b) => a + b, 0)
        });
  }

  // array from range

  range(x: number): number[] {
    let arr = [];
    for (let i = 0; i < x; i++) arr.push(i);
    return arr;
  }

  // get total, in, out

  getTotal(arr: number[]) {
    if (arr.length > 0)
      return arr.reduce((acc, i) => acc + i);
    else
      return 0;
  }

  getIn(arr: number[]) {
    if (arr.length > 0)
      return arr.slice(0, 9).reduce((acc, i) => acc + i);
    else
      return 0;
  }

  getOut(arr: number[]) {
    if (arr.length > 0)
      return arr.slice(9).reduce((acc, i) => acc + i);
    else
      return 0;
  }

  // model

  scores = [
    {
      name: 'Player 1',
      scores: []
    },
    {
      name: 'Player 2',
      scores: []
    },
    {
      name: 'Player 3',
      scores: []
    },
    {
      name: 'Player 4',
      scores: []
    },
  ];

  log() {
    console.log(this.scores);
  }

}
