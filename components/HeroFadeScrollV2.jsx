import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function HeroFadeScroll() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    // Image fades in from 1% to 27% scroll
    const imageOpacity = useTransform(scrollYProgress, [0.01, 0.27], [0, 1]);

    // Section moves up just a bit after 60%
    const sectionTranslateY = useTransform(scrollYProgress, [0.85, 1], [0, 0]);

    // Scale stays 1 until 0.27 scroll, then shrinks to 0.5 till end
    const scaleEffect = useTransform(scrollYProgress, [0.35, 1], [1, 0.5]);

    return (
        <div style={{ height: "200vh", position: "relative" }} ref={sectionRef}>
            <motion.section
                style={{ y: sectionTranslateY }}
                className="sticky top-0 h-screen w-full bg-white overflow-hidden"
            >
                {/* Shrinking container (video + image) */}
                <motion.div
                    style={{ scale: scaleEffect }}
                    className="relative w-full h-full"
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

                    {/* Fading Image */}
                    <motion.div
                        style={{ opacity: imageOpacity }}
                        className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center"
                    >
                        <img
                            src="/public/AuctionHubqwerty.png"
                            alt="Logo"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </motion.div>
            </motion.section>
        </div>
    );
}

export default HeroFadeScroll;
