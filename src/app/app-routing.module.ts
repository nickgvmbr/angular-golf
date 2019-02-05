import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameComponent } from './components/game/game.component';
import { NewGameComponent } from './components/new-game/new-game.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'new-game',
    pathMatch: 'full'
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'new-game',
    component: NewGameComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
