import { motion } from "framer-motion";
import React from "react";
import GalleryHeroPic from "../../../assets/paintings2/IMG_01.jpeg";

interface Props {
  title: string;
  description: string;
  buttonText: string;
}

export const GalleryTitle: React.FC<Props> = ({
  title,
  description,
  buttonText,
}) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card w-96 glass">
          <figure>
            <img
              src={GalleryHeroPic}
              className="max-w-sm rounded-lg shadow-2xl"
              alt="gallery painting hero pic"
            />
          </figure>
          <div className="card-body">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 10 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <h2 className="card-title">This is a painting</h2>
              <p>Title, and description</p>
            </motion.div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View more!</button>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-5xl font-bold font-ptmono">{title}</h1>
          <p className="py-6 font-ptmono">{description}</p>
          <button className="btn btn-primary font-ptmono">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default GalleryTitle;
