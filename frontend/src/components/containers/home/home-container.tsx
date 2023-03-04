import dotenv from "dotenv";
import React from "react";
import Layout from "../../../components/layout/layout";

import HomeTitle from "./home-title";
function HomeContainer() {
  return (
    <div>
      <HomeTitle
        title="David Bade"
        description="Contemporary artist based in the Caribbean."
        buttonText={"View work"}
      />
    </div>
  );
}

export default HomeContainer;
