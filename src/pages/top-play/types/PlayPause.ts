import { ActiveSong } from "../../../components/play-pause/types";
import { ChartWorld } from "../../../pages/discover1/types";

export interface PlayPause {
  song: ChartWorld,
  handlePause: () => void,
  handlePlay: () => void,
  isPlaying: boolean,
  activeSong: ActiveSong
}
