import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function HeroFadeScroll() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    // Fade in the image only between 20% and 40% scroll progress
    const imageOpacity = useTransform(scrollYProgress, [0.01, 0.27], [0, 1]);

    // Slide section up after 40% scroll progress
    const sectionTranslateY = useTransform(scrollYProgress, [0.4, 1], [0, -200]);

    return (
        <div style={{ height: "150vh", position: "relative" }} ref={sectionRef}>
            <motion.section
                style={{ y: sectionTranslateY }}
                className="sticky top-0 h-screen w-full overflow-hidden"
            >
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    src="/public/0001-1000.mp4"
                />

                {/* Fading Image on Top */}
                <motion.div
                    style={{ opacity: imageOpacity }}
                    className="absolute top-0 left-0 w-full h-full z-10 bg-white flex items-center justify-center"
                >
                    <img src="/public/AuctionHub.png" alt="Logo" className="w-[900px] h-auto" />
                </motion.div>
            </motion.section>
        </div>
    );
}

export default HeroFadeScroll;

// Perfect what i wanted