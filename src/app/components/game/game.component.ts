import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatSnackBar } from '@angular/material';

import { NewGame } from '../new-game/new-game';
import { Scores } from './scores';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  constructor(
    public apiService: ApiService,
    private snackBar: MatSnackBar
  ) { }

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
    let acc = 0;
    for (let i = 0; i < 9; i++)
      if (arr[i]) acc += arr[i];
    return acc;
  }

  getOut(arr: number[]) {
    let acc = 0;
    for (let i = 9; i < 18; i++)
      if (arr[i]) acc += arr[i];
    return acc;
  }

  // model

  scores: Scores[] = [
    {
      name: 'Player 1',
      scores: [],
      snack: false
    },
    {
      name: 'Player 2',
      scores: [],
      snack: false
    },
    {
      name: 'Player 3',
      scores: [],
      snack: false
    },
    {
      name: 'Player 4',
      scores: [],
      snack: false
    },
  ];
  
  check() {
    for (let i = 0; i < this.game.players; i++) {

      let complete = true;
      for (let j = 0; j < this.scores[i].scores.length; j++)
        if (this.scores[i].scores[j] === undefined) complete = false;

      if (this.scores[i].scores.length === 18 && complete && this.scores[i].snack === false) {

        let score = this.getTotal(this.scores[i].scores) - this.parTotal$;
        this.snackBar.open(
          `Hey ${this.scores[i].name}, you got a ${score > 0 ? '+' : ''}${score}. ${score <= 0 ? 'You\'re a pro!' : 'Another round?'}`, 'Dismiss', {
          duration: 4000,
        });
        this.scores[i].snack = true;

      }
    }
  
  }

  log() {
    console.log(this.scores);
  }

}
