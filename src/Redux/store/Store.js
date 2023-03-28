import { configureStore } from "@reduxjs/toolkit";
import BucketSlice from "../slices/BucketSlice";
import CardSlice from "../slices/CardSlice";

const store = configureStore({
    reducer: {
        bucket: BucketSlice,
        card: CardSlice,
    }
})

export default store;