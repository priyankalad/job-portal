import { useEffect } from "react";
import sunIcon from "../images/desktop/icon-sun.svg";
import moonIcon from "../images/desktop/icon-moon.svg";
import searchIcon from "../images/desktop/icon-search.svg";
import locationIcon from "../images/desktop/icon-location.svg";

import { fetchAllJobs } from "../redux/jobListSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchAllJobs());
  }, [dispatch]);
  return (
    <div className="app">
      <header className="app__header">
        <div className="header">
          <div className="header__logo">devjobs</div>
          <div className="header__theme">
            <img className="theme__light" src={sunIcon} alt="sun icon" />
            <label className="switch" htmlFor="checkbox">
              <input id="checkbox" type="checkbox" className="switch__input" />
              <span className="switch__slider"></span>
            </label>
            <img className="theme__dark" src={moonIcon} alt="moon icon" />
          </div>
          <div className="header__filters">
            <div className="filters__by-title">
              <img
                src={searchIcon}
                alt="Filter by title, companies, expertise..."
              />
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
        </div>
      </header>
      <main className="app__main">
        <div className="card-container">
          {jobs &&
            jobs.map((j) => {
              const createdAt = timeSince(new Date(j.created_at));

              return (
                <div className="card" key={j.id}>
                  <img className="card__logo" src={j.company_logo} />
                  <div className="card__body">
                    <p className="card__meta">
                      {createdAt} . {j.type}
                    </p>
                    <p className="card__position">{j.title}</p>
                    <p className="card__company">{j.company}</p>
                  </div>
                  <p className="card__location">{j.location}</p>
                </div>
              );
            })}
        </div>
      </main>
      {/* <footer className="app__footer">
        <button className="footer__load-more">Load More</button>
      </footer> */}
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

export default App;
