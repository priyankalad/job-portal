import React from "react";
import Header from "./Header";
import JobsList from "./JobsList";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <JobsList />
      </main>
    </div>
  );
}

export default App;
