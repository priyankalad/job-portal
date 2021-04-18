import React from "react";
import searchIcon from "../images/desktop/icon-search.svg";
import locationIcon from "../images/desktop/icon-location.svg";

export default function Filters() {
  return (
    <div className="header__filters">
      <div className="filters__by-title">
        <img src={searchIcon} alt="Filter by title, companies, expertise..." />
        <input
          type="text"
          className="txt-search"
          placeholder="Filter by title, companies, expertise..."
        />
      </div>
      <div className="filters__by-location">
        <img src={locationIcon} alt="Filter by location..." />
        <input
          type="text"
          className="txt-location"
          placeholder="Filter by location..."
        />
      </div>
      <div className="filters__full-time">
        <label className="checkbox-container" htmlFor="chk-fulltime">
          Full Time Only
          <input type="checkbox" id="chk-fulltime" />
          <span className="checkmark"></span>
        </label>
        <button className="btn-search">Search</button>
      </div>
    </div>
  );
}
