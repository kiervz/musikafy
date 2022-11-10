import { ChartWorld } from "../../discover/types";
import { ActiveSong } from "../../../components/play-pause/types";

export interface TopChart {
  song: ChartWorld,
  i: number,
  isPlaying: boolean,
  activeSong: ActiveSong,
  handlePauseClick: () => void,
  handlePlayClick: (song?: ChartWorld, i?: number) => void
}
