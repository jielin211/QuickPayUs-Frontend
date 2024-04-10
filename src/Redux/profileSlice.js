import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  countryCode: "+93",
  phoneNumber: 6256,
  alertNotifications: true,
  emailNotifications: true,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfileField(state, action) {
      const { field, value } = action.payload;
      return {
        ...state,
        [field]: value,
      };
    },
    resetForm() {
      return initialState;
    },
  },
});

export const { updateProfileField } = profileSlice.actions;

export default profileSlice.reducer;
