import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VpCardComponent } from './vp-card/vp-card.component';
import { ProfessionCardComponent } from './profession-card/profession-card.component';
import { CentreRowComponent } from './centre-row/centre-row.component';
import { DiscardPileComponent } from './discard-pile/discard-pile.component';
import { ProfessionDeckComponent } from './profession-deck/profession-deck.component';
import { ChapterIncompleteComponent } from './chapter-incomplete/chapter-incomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    VpCardComponent,
    ProfessionCardComponent,
    CentreRowComponent,
    DiscardPileComponent,
    ProfessionDeckComponent,
    ChapterIncompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
