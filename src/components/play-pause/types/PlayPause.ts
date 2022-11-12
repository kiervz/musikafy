import { RelatedSongsData } from "../../related-songs/types/RelatedSongsData";
import { ActiveSong } from "./ActiveSong";

export interface PlayPause {
  song: RelatedSongsData,
  handlePause: () => void,
  handlePlay: () => void,
  isPlaying: boolean,
  activeSong: ActiveSong
}
