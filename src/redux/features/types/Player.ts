import { ChartWorld } from "../../../pages/Discover/types";

export interface Player {
  currentSongs: ChartWorld[],
  currentIndex: number,
  isActive: boolean,
  isPlaying: boolean,
  activeSong: Object,
  genreListId: string,
}
