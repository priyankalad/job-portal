import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "./JobCard";
import { fetchAllJobs } from "../redux/jobListSlice";

export default function JobsList() {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchAllJobs());
  }, [dispatch]);
  return (
    <div className="card-container">
      {jobs && jobs.map((j) => <JobCard key={j.id} job={j} />)}
    </div>
  );
}
