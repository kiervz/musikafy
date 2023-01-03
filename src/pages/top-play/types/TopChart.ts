import { ChartWorld } from "../../discover1/types";
import { ActiveSong } from "../../../components/play-pause/types";
import { RelatedSongs } from "../../../components/related-songs/types";

export interface TopChart {
  song: ChartWorld,
  isPlaying: boolean,
  activeSong: ActiveSong,
  handlePauseClick: () => void,
  handlePlayClick: (song?: any, i?: number) => void
}
