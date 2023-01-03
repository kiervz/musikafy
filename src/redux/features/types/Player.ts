import { ChartWorld } from "../../../pages/discover1/types";

export interface Player {
  currentSongs: ChartWorld[],
  currentIndex: number,
  isActive: boolean,
  isPlaying: boolean,
  activeSong: Object,
  genreListId: string,
}
