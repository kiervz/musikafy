import { ChartWorld } from "../../../pages/discover/types";
import { ActiveSong } from "../../play-pause/types/ActiveSong";

export interface Song {
  song: ChartWorld,
  i: number,
  isPlaying: boolean,
  activeSong: ActiveSong,
  data: ChartWorld
}
