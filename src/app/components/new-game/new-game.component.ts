import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {
  constructor(private apiService: ApiService) { }
  tees$: [];

  ngOnInit() {
    this.apiService.getTees().subscribe(res => this.tees$ = res);
  }

}
