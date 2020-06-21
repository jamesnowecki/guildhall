
export interface IProfessionCard {
    profession: string;
    color: string;
    image: string;
    abilityList: object[];
    playCard: any;
}



export class ProfessionCard implements IProfessionCard {
    profession: string;
    color: string;
    image: string;
    abilityList: object[];

    constructor( profession: string, color: string, image: string, abilityList: object[]) {
        this.profession = profession;
        this.color = color;
        this.image = image;
        this.abilityList = abilityList;
    }

    playCard() {
        console.log("this card has been played")
    }
}

export interface IProfessionClass {
    new (name: string): ProfessionCard;
}

export class AssassinCard extends ProfessionCard {
    constructor(color: string){
        super(
            "Assassin",
            color,
            "assets/images/assassin.jpg",
           [
               {0: "Discard one card from one other player's guildhall"},
               {2: "Discard one card each from two different chapters of one other player's guildhall"},
               {4: "Discard two cards from one other player's guildhall"}
           ]
        )
    }

    ability1() {
        console.log("ability 1 triggered")
    }

    ability2() {
        console.log("ability 2 triggered")
    }

    ability3() {
        console.log("ability 3 triggered")
    }
}

export class FarmerCard extends ProfessionCard {
    constructor(color: string){
        super(
            "Farmer",
            color,
            "assets/images/farmer.jpg",
           [
               {1: "Gain one VP token"},
               {3: "Gain two VP tokens"},
           ]
        )
    }

    ability1() {
        console.log("ability 1 triggered")
    }

    ability2() {
        console.log("ability 2 triggered")
    }
}

export class HistorianCard extends ProfessionCard {
    constructor(color: string){
        super(
            "Historian",
            color,
            "assets/images/historian.jpg",
           [
               {0: "Place the top card of the discard pile in your guildhall unless it is a duplicate"},
               {2: "Search discard pile and select one card, place it in your guildhall"},
               {4: "Search discard pile and select two cards, place them in your guildhall"}
           ]
        )
    }

    ability1() {
        console.log("ability 1 triggered")
    }

    ability2() {
        console.log("ability 2 triggered")
    }

    ability3() {
        console.log("ability 3 triggered")
    }
}

export class TraderCard extends ProfessionCard {
    constructor(color: string){
        super(
            "Trader",
            color,
            "assets/images/trader.jpg",
           [
               {0: "Swap one card in your guildhall with one from the guildhall of another player"},
               {2: "Swap two cards in your guildhall with two from the guildhall of another player"},
               {4: "Swap one chapter (containing at least one card) with a chapter from another player's guildhall"}
           ]
        )
    }

    ability1() {
        console.log("ability 1 triggered")
    }

    ability2() {
        console.log("ability 2 triggered")
    }

    ability3() {
        console.log("ability 3 triggered")
    }
}

export class DancerCard extends ProfessionCard {
    constructor(color: string){
        super(
            "Dancer",
            color,
            "assets/images/dancer.jpg",
           [
               {"X": "Draw X cards where X is the number of dancers in your guildhall, then take another action"}
           ]
        )
    }

    ability1() {
        console.log("ability 1 triggered")
    }
}

export class WeaverCard extends ProfessionCard {
    constructor(color: string){
        super(
            "Weaver",
            color,
            "assets/images/weaver.png",
           [
               {0: "Place 1 card from your hand into your guildhall"},
               {2: "Exchange 2 cards from your hand with 1 card from your guildhall"},
               {4: "Exchange any number of cards from your hand with 2 cards from your guildhall"}
           ]
        )
    }

    ability1() {
        console.log("ability 1 triggered")
    }

    ability2() {
        console.log("ability 2 triggered")
    }

    ability3() {
        console.log("ability 3 triggered")
    }
}