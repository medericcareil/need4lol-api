import { Kill } from "./Kill";
import { Participant } from "./Participant";

export interface Match {
    matchId: string;
    gameMode: string;
    gameDuration: number;
    totalKills: number;
    totalAssists: number;
    totalDeaths: number;
    participants: Participant[];
}
