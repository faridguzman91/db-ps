import React from 'react'
import UploadHeroPic from '../assets/david-painting.jpg'
import UploadPageContainer from '../components/containers/upload/upload-container'

const picWidth: number = 600
const picHeight: number = 400

const backgroundColor: string = 'snow'


function UploadClient() {
    return (
        <div className="hero min-h-screen  bg-opacity-20" >
            <div className="hero-overlay   bg-opacity-100"
                style={{
                    backgroundColor: backgroundColor,
                }}>

            </div>
            <div className="hero-content text-center text-neutral-content">
                {/* <div className="max-w-md">
                    <h1 className="mb-5 text-5xl bg-white font-bold font-ptmono">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div> */}

                <div className="card w-100 h-1/4 glass">
                    <figure>
                        <img src={UploadHeroPic} alt="Upload" className='w-88 h-88' style={{
                            width: picWidth,
                            height: picHeight,
                        }} />

                    </figure>
                    <div className="card-body h-88 w-88">
                        <h1 className="card-title font-ptmono py-2 text-black ">Login David Bade</h1>
                        <p className="font-ptmono text-black py-2">Login to upload art</p>

                        <input type="text" placeholder="Type email" className="input input-bordered w-full max-w-xs" />

                        <input type="password" placeholder="Password" classNameType password" className="input input-bordered w-full max-w-xs" />
                        <div className="card-actions justify-end py-2">
                            <button className="btn btn-primary font-ptmono py-2">Login!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UploadClient