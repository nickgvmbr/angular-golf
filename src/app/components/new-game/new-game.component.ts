import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

import { NewGame } from '../../models/new-game';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  // get tees

  tees$: [];
  ngOnInit() {
    this.apiService.getTees().subscribe(res => this.tees$ = res);
  }
  
  // init form

  newGame = new NewGame(null, null);

  // on submit

  submit() {
    console.log('submitted', this.newGame.tee, this.newGame.players);
    sessionStorage.setItem('game', JSON.stringify(this.newGame));
    this.router.navigate(['/game']);
  }

}
