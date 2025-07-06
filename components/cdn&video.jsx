// src/App.jsx
import React from 'react';
import ThreeScene from '/components/ThreeScene';
import threed from '../components/my3dvideo';

function App() {
    return (
        <div>
            <div className="relative w-full h-screen overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/0001-1000.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="relative w-full h-screen overflow-hidden">
                <iframe
                    src="https://player.vimeo.com/video/1098974425?title=0&byline=0&portrait=0&muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    title="Background Video"
                ></iframe>
            </div>
        </div>
    );
}

export default App;
