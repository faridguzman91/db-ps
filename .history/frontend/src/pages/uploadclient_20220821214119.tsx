import React from 'react'
import UploadHeroPic from '../assets/david-painting.jpg'
import UploadPageContainer from '../components/containers/upload/upload-container'



function UploadClient() {
    return (
        <div className="hero min-h-screen" style={{
            backgroundImage: `url(${UploadHeroPic})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: '0.1'
        }}>
            <div className="hero-overlay bg-opacity-20" ></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}


export default UploadClient