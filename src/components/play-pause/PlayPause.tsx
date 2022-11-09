import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'
import { PlayPause as PlayPauseProps } from './types/PlayPause';

const PlayPause: React.FC<PlayPauseProps> = ({ song, handlePause, handlePlay, isPlaying, activeSong }) => {
  return (
    <>
      {isPlaying && activeSong?.title === song.title
        ?
        <FaPauseCircle
          size={35}
          onClick={handlePause}
          className="text-gray-300"
        />
        :
        <FaPlayCircle
          size={35}
          onClick={handlePlay}
          className="text-gray-300"
        />}
    </>
  )
};

export default PlayPause;
