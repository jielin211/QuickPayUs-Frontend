import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./slice";
import notificationsReducer from "./notificationsSlice";
import announcementsReducer from "./announcementsSlice";
import kycVerificationReducer from "./KycVerificationSlice";
import profileSliceReducer from "./profileSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    notifications: notificationsReducer,
    announcements: announcementsReducer,
    kycVerification: kycVerificationReducer,
    profile: profileSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
