import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  success: false,
  total: 0,
  totalPages: 0,
  data: [],
};

//TODO: create entities for announcements so that we can update the read status of a notification using an id

const announcementsSlice = createSlice({
  name: "announcements",
  initialState: initialState,

  reducers: {
    setAnnouncements: (state, action) => {
      const { success, total, totalPages, data } = action.payload;
      return {
        ...state,
        success,
        total,
        totalPages,
        data: [...state.data, ...data],
      };
    },
    resetAnnouncements: () => initialState,
  },
});

export const {
  setAnnouncements,
  resetAnnouncements,
  setAnnouncementsReadStatus,
} = announcementsSlice.actions;

export default announcementsSlice.reducer;
