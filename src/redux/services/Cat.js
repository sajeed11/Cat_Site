import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const catApi = createApi({
  reducerPath: "catApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thecatapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "x-api-key",
        "live_nA7DCgbjgep1jyDs69wikF6NX1eaeNIAZUs9p0pABRpPivcsVa5YLQrESHwDBomi"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBreeds: builder.query({
      query: () => `/breeds`,
    }),
    getImages: builder.query({
      query: (breedId) => `/images/search?breed_ids=${breedId}`,
    }),
    getFirstImages: builder.query({
      query: () => `/images/search?limit=10`,
    }),
  }),
});

export const { useGetBreedsQuery, useGetImagesQuery, useGetFirstImagesQuery } =
  catApi;
