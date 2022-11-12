import { ActiveSong } from "../../play-pause/types";
import { RelatedSongsData } from "../../related-songs/types/RelatedSongsData";

export interface SongBar {
  song: RelatedSongsData;
  i: number;
  artistId: string;
  isPlaying: boolean;
  activeSong: ActiveSong;
  handlePauseClick: () => void;
  handlePlayClick: (song?: any, i?: any) => void;
}
