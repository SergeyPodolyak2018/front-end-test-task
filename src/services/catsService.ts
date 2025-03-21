import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CatModel } from '../definitions/definitions';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.thecatapi.com/v1',
});

const baseQueryWithRetry = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    result = await baseQuery(args, api, extraOptions);
  }
  return result;
};

export const catsApi = createApi({
  reducerPath: 'catsApi',
  baseQuery: baseQueryWithRetry,
  endpoints: (builder) => ({
    getAllBreads: builder.query<CatModel[], string>({
      query: () => `/breeds`,
    }),
  }),
});

export const { useGetAllBreadsQuery } = catsApi;
