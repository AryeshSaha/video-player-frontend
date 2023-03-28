import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// BaseUrl
const BaseUrl = "http://127.0.0.1:4000";

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
        config,
      );
      // dispatch(FetchBucketsAction)
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
        config,
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
        config,
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
      state.createBucket = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
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
    });
    builder.addCase(DeleteBucketAction.rejected, (state, action) => {
      state.isLoading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
  },
});

export default BucketSlice.reducer;
