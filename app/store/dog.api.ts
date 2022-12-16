import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IDog, Response } from "../interfaces";

const baseUrl = "https://dogbreeddb.p.rapidapi.com/";

export const dogApi = createApi({
  reducerPath: "dogApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders(headers) {
      //headers.set("Accept", "application/vnd.api+json");
      // headers.set("X-BingApis-SDK", "application/vnd.api+json");
      headers.set(
        "X-RapidAPI-Key",
        "bf13508328msh6f78728334142e0p178472jsndc9a56699651"
      );
      headers.set("X-RapidAPI-Host", "dogbreeddb.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getDogByName: builder.query<IDog[], string>({
      query: (breed: string) => ({
        url: `?search=${breed}`,
        params: {
          q: breed,
          per_page: 10,
        },
      }),
      //transformResponse: (response: Response<IDog>) => response.dogs,
    }),
    getAllDogs: builder.query({
      query: () => ``,
    }),
  }),
});

export const { useGetDogByNameQuery, useGetAllDogsQuery } = dogApi;
