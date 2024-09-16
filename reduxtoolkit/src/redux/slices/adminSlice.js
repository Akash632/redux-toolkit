import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adminApi = createApi({
    reducerPath: 'admin',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
      getAccounts: builder.query({   //name we give here will be the hook here getAccount
        query: () => `amount`,
        providesTags:['accounts']
      }),
      addAccount : builder.mutation({
        query: (body) => ({
            url : 'amount',
            method : 'POST',
            body : body
        }),
        invalidatesTags:['accounts']
      })
    }),
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { useGetAccountsQuery, useAddAccountMutation } = adminApi