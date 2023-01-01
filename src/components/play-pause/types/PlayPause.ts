
import { RelatedSongsData } from "../../related-songs/types/RelatedSongsData";
import { Song } from "../../song-card/types";
import { ActiveSong } from "./ActiveSong";

export interface PlayPause {
  song: RelatedSongsData,
  handlePause?: () => void,
  handlePlay?: (song: RelatedSongsData, i: number) => void,
  isPlaying: boolean,
  activeSong: ActiveSong
}
