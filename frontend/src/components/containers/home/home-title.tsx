import React from "react";
import HomeHeroPic from "../../../assets/painting/david-painting.jpg";

interface Props {
  title: string;
  description: string;
  buttonText: string;
}

function HomeTitle({ title, description, buttonText }: Props) {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={HomeHeroPic} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold font-ptmono">{title}</h1>
          <p className="py-6 font-ptmono">{description}</p>
          <button className="btn btn-primary font-ptmono">{buttonText}</button>
        </div>
      </div>
    </div>
  );
}

export default HomeTitle;
