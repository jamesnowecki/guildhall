export interface IVPCard {
    cost: number,
    value: number,
    abilityText: string;
    spend: any;
}

export class VPCard implements IVPCard {
    cost: number;
    value: number;
    abilityText: string;
    constructor( cost: number, value: number, abilityText: string) {
        this.cost = cost;
        this.value = value;
        this.abilityText = abilityText;
    }

    spend() {
        console.log("this card has been spent")
    }
}

export class VPCard2 extends VPCard {
    constructor() {
        super(1, 2, "Move an incomplete chapter from another player's guildhall to yours")
    }

    ability() {
        console.log("Move an incomplete chapter from another player's guildhall to yours")
    }
}

export class VPCard3A extends VPCard {
    constructor() {
        super(1, 3, "Swap one card from your guildhall with any two cards from one other player's guildhall")
    }

    ability() {
        console.log("Swap one card from your guildhall with any two cards from one other player's guildhall")
    }
}

export class VPCard3B extends VPCard {
    constructor() {
        super(1, 3, "Put any number of cards from your hand into your guildhall")
    }

    ability() {
        console.log("Put any number of cards from your hand into your guildhall")
    }
}

export class VPCard4A extends VPCard {
    constructor() {
        super(1, 4, "Draw 5 cards from the draw deck")
    }

    ability() {
        console.log("Draw 5 cards from the draw deck")
    }
}

export class VPCard4B extends VPCard {
    constructor() {
        super(1, 4, "Gain an action")
    }

    ability() {
        console.log("Gain an action")
    }
}

export class VPCard4C extends VPCard {
    constructor() {
        super(1, 4, "Take a card from another player's guildhall and put it in your own")
    }

    ability() {
        console.log("Take a card from another player's guildhall and put it in your own")
    }
}

export class VPCard5 extends VPCard {
    constructor() {
        super(1, 5, "")
    }
}

export class VPCard7 extends VPCard {
    constructor() {
        super(2, 7, "Gain 2 actions")
    }

    ability() {
        console.log("Gain 2 actions")
    }
}

export class VPCard9 extends VPCard {
    constructor() {
        super(2, 9, "")
    }
}

