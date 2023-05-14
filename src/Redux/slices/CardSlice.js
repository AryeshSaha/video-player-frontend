import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// BaseUrl
// const BaseUrl = "http://127.0.0.1:4000";
const BaseUrl = "https://convin-backend-video-player.onrender.com";

// require fields
const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

// Fetch Single card Action
export const FetchSingleCardAction = createAsyncThunk(
  "card/single-card",
  async (input, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`${BaseUrl}/api/card/${input}`, config);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Create card Action
export const CreateCardAction = createAsyncThunk(
  "card/create-card",
  async (input, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(
        `${BaseUrl}/api/card/create`,
        input,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);
// Update card Action
export const UpdateCardAction = createAsyncThunk(
  "card/update-card",
  async (input, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.put(
        `${BaseUrl}/api/card/update`,
        input,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Delete card Action
export const DeleteCardAction = createAsyncThunk(
  "card/delete-card",
  async (input, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.put(
        `${BaseUrl}/api/card/delete`,
        input,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        console.log("Error: ", error);
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Move card Action
export const MoveCardAction = createAsyncThunk(
  "card/move-card",
  async (input, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.put(
        `${BaseUrl}/api/card/move`,
        input,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        console.log("Error: ", error);
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

const CardSlice = createSlice({
  name: "card",
  initialState: {},
  extraReducers: (builder) => {
    // Fetch single card handling
    builder.addCase(FetchSingleCardAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(FetchSingleCardAction.fulfilled, (state, action) => {
      state.cardInfo = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(FetchSingleCardAction.rejected, (state, action) => {
      state.isLoading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    // Create card handling
    builder.addCase(CreateCardAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(CreateCardAction.fulfilled, (state, action) => {
      state.createCard = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(CreateCardAction.rejected, (state, action) => {
      state.isLoading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
    // Update card handling
    builder.addCase(UpdateCardAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(UpdateCardAction.fulfilled, (state, action) => {
      state.updateCard = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(UpdateCardAction.rejected, (state, action) => {
      state.isLoading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
    // Delete card handling
    builder.addCase(DeleteCardAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(DeleteCardAction.fulfilled, (state, action) => {
      state.deleteCard = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(DeleteCardAction.rejected, (state, action) => {
      state.isLoading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
    // Move card handling
    builder.addCase(MoveCardAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(MoveCardAction.fulfilled, (state, action) => {
      state.moveCard = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(MoveCardAction.rejected, (state, action) => {
      state.isLoading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
  },
});

export default CardSlice.reducer;
