import React from "react";

import HomeTitle from "./home-title";
function HomeContainer() {
  return (
    <div className="card w-96 h-auto glass">
      <figure>
        <img src={""} alt="davidwerk" />
      </figure>
      <div className="card-body">
        <HomeTitle title="David Bade" description="Beeldend Kunstenaar" />
      </div>
    </div>
  );
}

export default HomeContainer;
