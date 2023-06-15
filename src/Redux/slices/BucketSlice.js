import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CreateCardAction,
  DeleteCardAction,
  MoveCardAction,
  UpdateCardAction,
} from "./CardSlice";

// BaseUrl
const BaseUrl = "https://convin-backend-video-player.onrender.com";
// const BaseUrl = "http://127.0.0.1:4000";

// require fields
const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

// Fetch Buckets Action
export const FetchBucketsAction = createAsyncThunk(
  "bucket/all-buckets",
  async (input, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`${BaseUrl}/api/bucket/fetch`, config);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Fetch Single Bucket Action
export const FetchSingleBucketAction = createAsyncThunk(
  "bucket/single-bucket",
  async (input, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `${BaseUrl}/api/bucket/${input}`,
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

// Create Bucket Action
export const CreateBucketAction = createAsyncThunk(
  "bucket/create-bucket",
  async (input, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(
        `${BaseUrl}/api/bucket/create`,
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
// Update Bucket Action
export const UpdateBucketAction = createAsyncThunk(
  "bucket/update-bucket",
  async (input, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.put(
        `${BaseUrl}/api/bucket/update`,
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
// Delete Bucket Action
export const DeleteBucketAction = createAsyncThunk(
  "bucket/delete-bucket",
  async (input, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.put(
        `${BaseUrl}/api/bucket/delete`,
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

const BucketSlice = createSlice({
  name: "bucket",
  initialState: {},
  extraReducers: (builder) => {
    // Fetch buckets handling
    builder.addCase(FetchBucketsAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(FetchBucketsAction.fulfilled, (state, action) => {
      state.bucketInfo = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(FetchBucketsAction.rejected, (state, action) => {
      state.isLoading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
    // Fetch single bucket handling
    builder.addCase(FetchSingleBucketAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(FetchSingleBucketAction.fulfilled, (state, action) => {
      state.singleBucketInfo = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(FetchSingleBucketAction.rejected, (state, action) => {
      state.isLoading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
    // Create bucket handling
    builder.addCase(CreateBucketAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(CreateBucketAction.fulfilled, (state, action) => {
      state.createdBucket = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
      state.bucketInfo.buckets.push(action?.payload?.bucket);
    });
    builder.addCase(CreateBucketAction.rejected, (state, action) => {
      state.isLoading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
    // Update bucket handling
    builder.addCase(UpdateBucketAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(UpdateBucketAction.fulfilled, (state, action) => {
      state.updateBucket = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
      const index = state.bucketInfo.buckets.findIndex(
        (bucket) => bucket.id === action?.payload?.updateBuck.id
      );
      state.bucketInfo.buckets[index] = action?.payload?.updateBuck;
    });
    builder.addCase(UpdateBucketAction.rejected, (state, action) => {
      state.isLoading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
    // Delete bucket handling
    builder.addCase(DeleteBucketAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(DeleteBucketAction.fulfilled, (state, action) => {
      state.deleteBucket = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
      const newArray = state.bucketInfo.buckets.filter(
        (bucket) => bucket.id !== action?.payload?.bucket.id
      );
      state.bucketInfo.buckets = newArray;
    });
    builder.addCase(DeleteBucketAction.rejected, (state, action) => {
      state.isLoading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
    // Create Card Action
    builder.addCase(CreateCardAction.fulfilled, (state, action) => {
      state.singleBucketInfo.bucket.Cards.push(action?.payload?.card);
    });
    // Update Card Action
    builder.addCase(UpdateCardAction.fulfilled, (state, action) => {
      const index = state.singleBucketInfo.bucket.Cards.findIndex(
        (card) => card.id === action?.payload?.updateCard.id
      );
      state.singleBucketInfo.bucket.Cards[index] = action?.payload?.updateCard;
    });

    // Move Card Action
    builder.addCase(MoveCardAction.fulfilled, (state, action) => {
      const newArray = state.singleBucketInfo.bucket.Cards.filter(
        (card) => card.id !== action?.payload?.moveCard.id
      );
      state.singleBucketInfo.bucket.Cards = newArray;
    });

    // Delete Card Action
    builder.addCase(DeleteCardAction.fulfilled, (state, action) => {
      const newArray = state.singleBucketInfo.bucket.Cards.filter(
        (card) =>
        // some() returns true if matches are found
          !action?.payload?.deletedCards.some(
            (removeCard) => card.id === removeCard.id
          )
      );
      state.singleBucketInfo.bucket.Cards = newArray;
    });
  },
});

export default BucketSlice.reducer;
