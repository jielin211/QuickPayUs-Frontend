import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dateOfBirth: "",
  gender: "",
  occupation: "",
  country: "",
  documentType: "ID_CARD",
  images: [],
};

const kycVerificationSlice = createSlice({
  name: "kyc",
  initialState,
  reducers: {
    updateKycField(state, action) {
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

export const { updateKycField } = kycVerificationSlice.actions;

export default kycVerificationSlice.reducer;
