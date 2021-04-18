import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./jobListSlice";

export default configureStore({
  reducer: {
    jobs: jobsReducer, 
  },
});
