import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const createDynamicEndpoint = (method, route) => {
  return {
    query: ({ url, data, id }) => {
      if (id) {
        return {
          url: `${url}/${route}/${id}`,
          method,
          body: data,
        };
      } else {
        return {
          url: `${url}/${route}`,
          method,
          body: data,
        };
      }
    },
  };
};

console.log("createDynamicEndpoint", createDynamicEndpoint("GET", ""));

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  tagTypes: ["notifications", "getNotifications", "getAnnouncements"],
  endpoints: (builder) => ({
    // GET request
    getUnreadNotificationsCount: builder.query({
      query: () => `/notifications?isRead=false`,
      // method: "GET",
      providesTags: ["notifications"],
    }),
    getNotifications: builder.query({
      query: ({ page }) => `/notifications?page=${page}`,
      // method: "GET",
      providesTags: ["getNotifications"],
    }),
    getAnnouncements: builder.query({
      query: ({ page }) => `/announcements?page=${page}`,
      // method: "GET",
      providesTags: ["getAnnouncements"],
    }),
    getReferralsList: builder.query({
      query: ({ type, level, page }) =>
        `/referrals?type=${type}&level=${level}&page=${page}`,
      // method: "GET",
    }),
    getTransactionsList: builder.query({
      query: ({ transactionType, status, page, from, to }) =>
        `transactions?transactionType=${transactionType}&status=${status}&page=${page}&from=${from}&to=${to}`,
      // method: "GET",
    }),
    getUser: builder.query({
      query: ({ uuid }) => `user/${uuid}`,
      // method: "GET",
    }),
    getData: builder.query(createDynamicEndpoint("GET", "")),
    getProgramsData: builder.query({
      query: () => "/programs",
      // method: "GET",
    }),
    getFAQ: builder.query({
      query: () => "/support/faq",
      // method: "GET",
    }),

    // POST request

    postData: builder.mutation(createDynamicEndpoint("POST", "")),
    postDepositForm: builder.mutation({
      query: (data) => ({
        url: `/transactions/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["notifications"],
    }),
    updateNotification: builder.mutation({
      query: (data) => ({
        url: `/notifications/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["notifications"],
    }),
    updateKycVerificationData: builder.mutation({
      query: (data) => ({
        url: `/user/update/kyc`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["notifications"],
    }),
    updateProfileData: builder.mutation({
      query: (data) => ({
        url: `/user/update/profile`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["notifications"],
    }),
    //have to add more post points here where ever the data changes and causes notifications to change
    // putData: builder.mutation(createDynamicEndpoint("PUT", ""), {
    //   invalidatesTags: ["notifications"],
    // }), //
    // deleteData: builder.mutation(createDynamicEndpoint("DELETE", ""), {
    //   invalidatesTags: ["notifications"],
    // }),
    putData: builder.mutation(createDynamicEndpoint("PUT", "")), //
    deleteData: builder.mutation(createDynamicEndpoint("DELETE", "")),
  }),
});

export const {
  useGetUserQuery,
  useGetAnnouncementsQuery,
  useGetProgramsDataQuery,
  useGetNotificationsQuery,
  useGetReferralsListQuery,
  useGetTransactionsListQuery,
  useGetUnreadNotificationsCountQuery,
  useGetDataQuery,
  useUpdateProfileDataMutation,
  usePostDepositFormMutation,
  usePostDataMutation,
  usePutDataMutation,
  useUpdateNotificationMutation,
  useDeleteDataMutation,
  useUpdateKycVerificationDataMutation,
  useGetFAQQuery
} = api;
