import React from 'react'

function my3dvideo() {
    return (
        <div>
            <div className="relative w-full h-screen overflow-hidden">
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-[-1]"
                >
                    <source src="/public/0001-1000.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <p>dsgfdhsgfjdh</p>
        </div>
    )
}

export default my3dvideo
