import { IProfessionClass, ProfessionCard, AssassinCard, TraderCard, FarmerCard, DancerCard, WeaverCard, HistorianCard } from "../app/templates/profession-card";

const createSubDeck = (profession: IProfessionClass): ProfessionCard[] => {

    let professionCardSubDeck: ProfessionCard[] = [];

    for(let index: number = 0; index < 20; index++) {

        let newProfessionCard: ProfessionCard;

        switch(true) {
            case index < 4: {
                newProfessionCard = new profession("blue");
                break;
            }
            case index < 8: {
                newProfessionCard = new profession("green");
                break;
            }
            case index < 12: {
                newProfessionCard = new profession("purple");
                break;
            }
            case index < 16: {
                newProfessionCard = new profession("red");
                break;
            }
            default: {
                newProfessionCard = new profession("red");
                break;
            }
        }

        professionCardSubDeck.push(newProfessionCard);
    }

    return professionCardSubDeck;
}

const createProfessionDeck = (): ProfessionCard[] => {

    const assassinDeck: ProfessionCard[] = createSubDeck(AssassinCard);
    const traderDeck: ProfessionCard[] = createSubDeck(TraderCard);
    const farmerDeck: ProfessionCard[] = createSubDeck(FarmerCard);
    const dancerDeck: ProfessionCard[] = createSubDeck(DancerCard);
    const weaverDeck: ProfessionCard[] = createSubDeck(WeaverCard);
    const historianDeck: ProfessionCard[] = createSubDeck(HistorianCard);

    const professionCardDeck: ProfessionCard[] = assassinDeck.concat(traderDeck, farmerDeck, dancerDeck, weaverDeck, historianDeck);

    return professionCardDeck;
}

export default createProfessionDeck();