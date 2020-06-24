import { VPCard } from "./vp-card"
import { ProfessionCard } from './profession-card';

export interface IPlayer {
    name: string;
    hand: ProfessionCard[];
    incompleteChapters: any;
    completeChapters: any;
    claimedVictoryCards: VPCard[];
    victoryTokens: number;
}

export interface IGameState {
    playerArray: IPlayer[],
    VPDeck: VPCard[],
    professionDeck: ProfessionCard[];
    professionDiscards: ProfessionCard[];
}

export class GameState implements IGameState {
    playerArray: IPlayer[];
    VPDeck: VPCard[];
    professionDeck: ProfessionCard[];
    professionDiscards: ProfessionCard[];

    constructor(playerArray: IPlayer[], VPDeck: VPCard[], professionDeck: ProfessionCard[], professionDiscards: ProfessionCard[]) {
        this.playerArray = playerArray;
        this.VPDeck = VPDeck;
        this.professionDeck = professionDeck;
        this.professionDiscards = professionDiscards;
    }
}