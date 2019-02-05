import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styles: [
    `button { position: fixed; right: 24px; bottom: 24px; }`
  ]
})
export class FabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
