import vpCards from "./mock-vpcards";
import professionCards from "./mock-profession-cards";
import { ProfessionCard } from 'src/app/templates/profession-card';
import { VPCard } from "src/app/templates/vp-card";
import { Player, GameState } from "../app/templates/game-classes"

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

const completedChapter: ProfessionCard[] = [professionCards[20], professionCards[24], professionCards[29], professionCards[34], professionCards[39]];

// const mockPlayer: any = {
//     name: "John Jimson",
//     hand: shortProfessionArray, 
//     incompleteChapters: [incompleteChapter1, incompleteChapter2, incompleteChapter2, incompleteChapter1, incompleteChapter1, incompleteChapter1],
//     completeChapters: [completedChapter],
//     victoryTokens: 4,
//     vpArray: claimedVPCards,
// };

const mockPlayers: string[] = ["TheRockDoctor", "Sideburns", "TheFilthWizard", "JJ"];

const createMockPlayerArray = (players: string[]): Player[] => {
    let mockPlayerArray: Player[];

    players.forEach(player => {
        let newPlayer: Player = new Player(player, shortProfessionArray, [incompleteChapter1, incompleteChapter2], [completedChapter], claimedVPCards, 4)

        mockPlayerArray.push(newPlayer)
    })

    return mockPlayerArray;
}

const createMockGameState = (players: string[]): GameState => {
    let mockGameState: GameState = new GameState(
        createMockPlayerArray(players),
        vpCards,
        professionCards,
        shortProfessionArray
    )

    return mockGameState;
}


export default createMockGameState(mockPlayers);
