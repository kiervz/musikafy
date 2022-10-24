import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { genres } from '../../assets/constants';
import { SongCard } from '../../components';
import { Error } from '../../components/common/error/Error';
import { Loader } from '../../components/common/loader/Loader';
import { useGetTopChartsQuery } from '../../redux/services/shazamCore';
import { ChartWorld } from './types'

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state: any) => state.player)
  const { data, isFetching, error} = useGetTopChartsQuery();

  if (isFetching) return <Loader title='Loading Songs...'/>;
  if (error) return <Error />;

  return (
    <div className='flex flex-col'>
      <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
        <h2 className='font-bold text-3xl text-white text-left'>
          Discover
        </h2>
        <select
          onChange={() => {}}
          value=''
          className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'
        >
          {genres.map((genre: any) =>
            <option key={genre.value} value={genre.value}>{genre.title}</option>
          )}
        </select>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {data?.map((song: ChartWorld, i: number) => (
          <SongCard
            key={i}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
