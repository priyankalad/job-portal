import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllJobs = createAsyncThunk("jobs/fetchAllJobs", async () => {
  return fetch(
    "https://cors.bridged.cc/https://jobs.github.com/positions.json"
  ).then((res) => res.json());
});

const jobListSlice = createSlice({
  name: "jobs",
  initialState: {
    themeMode: "light",
    jobs: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchAllJobs.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchAllJobs.fulfilled]: (state, { payload }) => {
      state.jobs = payload;
      state.loading = false;
    },
    [fetchAllJobs.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default jobListSlice.reducer;
