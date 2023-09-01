import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the base API endpoint
const baseUrl = 'https://panorbit.in/api';

// Create an API with endpoints
export const userDataApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: (name) => `/users.json`,
    }),
  }),
});

// Export the generated hooks for use in components
export const { useGetUserDataQuery } = userDataApi;
