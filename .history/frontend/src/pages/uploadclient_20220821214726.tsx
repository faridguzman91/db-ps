import React from 'react'
import UploadHeroPic from '../assets/david-painting.jpg'
import UploadPageContainer from '../components/containers/upload/upload-container'



function UploadClient() {
    return (
        // <div className="hero min-h-screen bg-opacity-20" style={{
        //     backgroundImage: `url(${UploadHeroPic})`,
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //     backgroundRepeat: 'no-repeat',
        //     opacity: '0.8'
        // }}>
            <div className="hero-overlay bg-opacity-100" ></div>
            <div className="hero-content text-center text-neutral-content">
                {/* <div className="max-w-md">
                    <h1 className="mb-5 text-5xl bg-white font-bold font-ptmono">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div> */}

                <div className="card w-96 glass">
                    <figure>
                        <img src={UploadHeroPic} alt="Upload" />

                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Life hack</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default UploadClient