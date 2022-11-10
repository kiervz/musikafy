import { ChartWorld } from "../../../pages/discover/types";
import { ActiveSong } from "./ActiveSong";

export interface PlayPause {
  song: ChartWorld,
  handlePause: () => void,
  handlePlay: () => void,
  isPlaying: boolean,
  activeSong: ActiveSong
}
