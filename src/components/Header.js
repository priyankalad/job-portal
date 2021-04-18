import React from "react";
import sunIcon from "../images/desktop/icon-sun.svg";
import moonIcon from "../images/desktop/icon-moon.svg";

import Filters from "./Filters";

export default function Header() {
  return (
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
        <Filters />
      </div>
    </header>
  );
}
