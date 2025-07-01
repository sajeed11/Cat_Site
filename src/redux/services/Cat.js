import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const apiKey = import.meta.env.VITE_CAT_API_KEY;
console.log("API Key:", apiKey);

export const catApi = createApi({
  reducerPath: "catApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thecatapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "x-api-key",
        apiKey
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBreeds: builder.query({
      query: () => `/breeds`,
    }),
    getImages: builder.query({
      query: (breedId) => `/images/search?limit=9&breed_ids=${breedId}`,
    }),
    getFirstImages: builder.query({
      query: () => `/images/search?limit=15`,
    }),
  }),
});

export const { useGetBreedsQuery, useGetImagesQuery, useGetFirstImagesQuery } =
  catApi;
