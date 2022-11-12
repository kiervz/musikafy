import { ActiveSong } from "../../play-pause/types";
import { RelatedSongsData } from "./RelatedSongsData";

export interface RelatedSongs {
  data: RelatedSongsData[],
  artistId: any,
  isPlaying: boolean,
  activeSong: ActiveSong,
  handlePauseClick: () => void,
  handlePlayClick: (song?: any, i?: any) => void
}
