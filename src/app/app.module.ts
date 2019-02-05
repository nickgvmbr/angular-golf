import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { GameComponent } from './components/game/game.component';
import { FabComponent } from './components/game/fab/fab.component';

import { MatFormFieldModule, MatSelectModule, MatButtonModule, MatSnackBarModule, MatIconModule, MatTooltipModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NewGameComponent,
    GameComponent,
    FabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
