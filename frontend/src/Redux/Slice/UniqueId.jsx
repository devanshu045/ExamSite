import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  uniqueId: null,
};

// Create the slice
const UniqueIdSlice = createSlice({
  name: 'UniqueId',
  initialState: initialState,
  reducers: {
    StoreUniqueId: (state, action) => {
      state.uniqueId = action.payload;
    },
  },
});

// Export the action creator
export const { StoreUniqueId } = UniqueIdSlice.actions;

// Export the reducer
export default UniqueIdSlice.reducer;
