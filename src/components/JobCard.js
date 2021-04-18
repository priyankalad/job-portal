import React from "react";

export default function JobCard({ job }) {
  const createdAt = timeSince(new Date(job.created_at));
  return (
    <div className="card">
      <img
        className="card__logo"
        loading="lazy"
        src={job.company_logo}
        alt="company logo"
      />
      <div className="card__body">
        <p className="card__meta">
          {createdAt} <span className="dot-separator">.</span> {job.type}
        </p>
        <p className="card__position">{job.title}</p>
        <p className="card__company">{job.company}</p>
      </div>
      <p className="card__location">{job.location}</p>
    </div>
  );
}

function timeSince(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  let interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}
