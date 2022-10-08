import { motion } from "framer-motion";
import React from "react";
import UploadHeroPic from "../assets/david-painting.jpg";
import UploadPageContainer from "../components/containers/upload/upload-container";

const picWidth: number = 600;
const picHeight: number = 400;

const backgroundColor: string = "snow";

function UploadClient() {
    return (
        <div className="hero min-h-screen  bg-opacity-20">
            <div
                className="hero-overlay   bg-opacity-100"
                style={{
                    backgroundColor: backgroundColor,
                }}
            ></div>
            <div className="hero-content text-center text-neutral-content">
                {/* <div className="max-w-md">
                    <h1 className="mb-5 text-5xl bg-white font-bold font-ptmono">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div> */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ opacity: 1, y: -1 }}
                >

                    <div className="card w-100 glass">
                        <figure>
                            <img
                                src={UploadHeroPic}
                                alt="Upload"
                                className="w-88 h-88"
                                style={{
                                    width: picWidth,
                                    height: picHeight,
                                }}
                            />
                        </figure>
                        <div className="card-body h-full w-full justify-between flex gap-10">
                            <h1 className="card-title font-ptmono py-2 text-black ">
                                Login David Bade
                            </h1>
                            <p className="font-ptmono text-black py-2">Login to upload art</p>

                            <div className="form-control w-full max-w-xs justify-between flex-start flex-wrap ">
                                <div className="mb-2 py-2">
                                    <label className="label mr-2 px-2">
                                        <span className="label-text px-2 mr-2">Email</span>
                                    </label>

                                    <input
                                        type="text"
                                        value="email"
                                        placeholder="Type email"
                                        className="input input-bordered w-full max-w-xs px-2 mr-2"
                                    />
                                </div>

                                <div className="mt-2">
                                    <label className="label">
                                        <span className="label-text ml-2">Password</span>
                                    </label>

                                    <input
                                        type="password"
                                        value="password"
                                        placeholder="Type password"
                                        classN-ame="input input-bordered w-full max-w-xs"
                                    />
                                </div>
                            </div>

                            <div className="card-actions justify-end py-2">
                                <button className="btn btn-primary font-ptmono py-2">
                                    Login!
                                </button>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
}

export default UploadClient;
