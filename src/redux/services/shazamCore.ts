import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi:any = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'a3858aebb5msh2d4a6a7c9ffa7a1p13ec7djsn43dc063ed465');

      return headers;
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world'}),
    getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
  })
})

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;
