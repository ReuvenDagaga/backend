import  jsonfile from 'jsonfile';
import { Player } from '../models/player.js';



const DB_PATH = process.env.DB_PATH || './DB/userDB.json';


export const writeToJsonFile = async (players: Player[]): Promise<void> => {
  await jsonfile.writeFile(DB_PATH, players);
};

export const readFromJsonFile = async (): Promise<Player[]> => {
  const players: Player[] = await jsonfile.readFile(DB_PATH);
  return players;
};

