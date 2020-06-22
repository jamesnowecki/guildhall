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
import { PlayerBoardComponent } from './player-board/player-board.component';
import { ChapterCompleteComponent } from './chapter-complete/chapter-complete.component';
import { OpponentBoardComponent } from './opponent-board/opponent-board.component';
import { ClaimedVpCardComponent } from './claimed-vp-card/claimed-vp-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GameFrameComponent } from './game-frame/game-frame.component';
import { TextSidebarComponent } from './text-sidebar/text-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    VpCardComponent,
    ProfessionCardComponent,
    CentreRowComponent,
    DiscardPileComponent,
    ProfessionDeckComponent,
    ChapterIncompleteComponent,
    PlayerBoardComponent,
    ChapterCompleteComponent,
    OpponentBoardComponent,
    ClaimedVpCardComponent,
    NavbarComponent,
    GameFrameComponent,
    TextSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
