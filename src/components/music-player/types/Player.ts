import { ChartWorld } from "../../../pages/discover/types";

export interface Player {
  activeSong:   ChartWorld,
  isPlaying:    boolean,
  currentIndex: number,
  volume:       number,
  seekTime:     number,
  onEnded:      any,
  onTimeUpdate: any,
  onLoadedData: any,
  repeat:       boolean
}
