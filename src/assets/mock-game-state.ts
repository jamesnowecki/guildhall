import vpCards from "./mock-vpcards";
import professionCards from "./mock-profession-cards";
import { ProfessionCard } from 'src/app/templates/profession-card';
import { VPCard } from "src/app/templates/vp-card";

const shortProfessionArray: ProfessionCard[] = [
    professionCards[0],
    professionCards[24], 
    professionCards[48], 
    professionCards[72], 
    professionCards[86], 
    professionCards[105]
];

const claimedVPCards: VPCard[] = [vpCards[0], vpCards[7], vpCards[14], vpCards[22]];

const incompleteChapter1: ProfessionCard[] = [professionCards[0], professionCards[4], professionCards[9], professionCards[14]];

const incompleteChapter2: ProfessionCard[] = [professionCards[20], professionCards[24], professionCards[29]];

 completedChapter: ProfessionCard[] = [professionCards[20], professionCards[24], professionCards[29], professionCards[34], professionCards[39]];

const mockPlayer: object = {
    "hand": shortProfessionArray, 
    "guildhall": {
                    "incompleteChapters": [incompleteChapter1, incompleteChapter2],
                    "completeChapters": completedChapter,
                    "claimedVictoryCards": claimedVPCards
                },
    "victoryTokens": 4,
};

export default mockPlayer;