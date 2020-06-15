import { VPCard, VPCard2, VPCard3A, VPCard3B, VPCard4A, VPCard4B, VPCard4C, VPCard5, VPCard7, VPCard9 } from "../app/templates/vp-card";



const createVPDeck = () => {

    let vpCardDeck: VPCard[] = [];

    for (let index:number = 0; index <= 30; index++) {

        let newVPCard: VPCard;

        switch(index) {
            case index <=3: {
                newVPCard = new VPCard2();
                break;
            }
            case index <=6: {
                newVPCard = new VPCard3A();
                break;
            }
            case index <=9: {
                newVPCard = new VPCard3B();
                break;
            }
            case index <=12: {
                newVPCard = new VPCard4A();
                break;
            }
            case index <=15: {
                newVPCard = new VPCard4B();
                break;
            }
            case index <= 18: {
                newVPCard = new VPCard4C();
                break;
            }
            case index <=21: {
                newVPCard = new VPCard7();
                break;
            }
            case index <=24: {
                newVPCard = new VPCard9();
                break;
            }
            default: {
                newVPCard = new VPCard5();
                break;
            }
        }

        vpCardDeck.push(newVPCard)

    }

    return VPCardDeck;
}

console.log(createVPDeck());

export default createVPDeck();