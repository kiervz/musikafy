import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ChartWorld } from '../discover1/types';
import { playerAction } from '../../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../../redux/services/shazamCore';

import TopChartItem from './TopChartItem';

const TopChart = () => {
  const dispatch = useDispatch();
  const { data } = useGetTopChartsQuery();
  const { activeSong, isPlaying } = useSelector((state: any) => state.player);

  const topPlays = data?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playerAction.playPause(false));
  };

  const handlePlayClick = (song: ChartWorld, i: number) => {
    const dataPlay: any = {
      song,
      data,
      i
    };
    dispatch(playerAction.setActiveSong(dataPlay));
    dispatch(playerAction.playPause(true));
  };

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-white font-bold text-2xl">Top Charts</h2>
        <Link to="/top-charts">
          <p className="text-gray-300 text-base cursor-pointer">See more</p>
        </Link>
      </div>

      <div className="mt-4 flex flex-col gap-1">
        {topPlays?.map((song: ChartWorld, i: number) => (
          <TopChartItem
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={() => handlePlayClick(song, i)}
          />
        ))}
      </div>
    </div>
  );
};

export default TopChart;
