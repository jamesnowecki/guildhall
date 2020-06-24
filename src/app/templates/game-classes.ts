import { VPCard } from "./vp-card"
import { ProfessionCard } from './profession-card';

export interface IPlayer {
    name: string;
    hand: ProfessionCard[];
    incompleteChapters: any;
    completeChapters: any;
    vpArray: VPCard[];
    victoryTokens: number;
}

export class Player implements IPlayer {
    name: string;
    hand: ProfessionCard[];
    incompleteChapters: any;
    completeChapters: any;
    vpArray: VPCard[];
    victoryTokens: number;

    constructor(name: string, hand: ProfessionCard[], incompleteChapters: any, completeChapters: any, vpArray: VPCard[], victoryTokens: number) {
       this.name = name;
        this.hand = hand;
        this.incompleteChapters = incompleteChapters;
        this.completeChapters = completeChapters;
        this.vpArray = vpArray;
        this.victoryTokens = victoryTokens
    }
}

export interface IGameState {
    playerArray: Player[],
    VPDeck: VPCard[],
    professionDeck: ProfessionCard[];
    professionDiscards: ProfessionCard[];
}

export class GameState implements IGameState {
    playerArray: Player[];
    VPDeck: VPCard[];
    professionDeck: ProfessionCard[];
    professionDiscards: ProfessionCard[];

    constructor(playerArray: Player[], VPDeck: VPCard[], professionDeck: ProfessionCard[], professionDiscards: ProfessionCard[]) {
        this.playerArray = playerArray;
        this.VPDeck = VPDeck;
        this.professionDeck = professionDeck;
        this.professionDiscards = professionDiscards;
    }
}