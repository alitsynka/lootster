'use client'
import {motion, useInView} from "framer-motion";
import Image from "next/image";
import portal from "@/assets/images/portal.png";
import {useRef} from "react";

export const AnimatedBlock = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    return (
        <motion.div
            ref={ref}
            initial={{y: 0}}
            animate={isInView ? { y: [0, -30, 0] } : ''} // Slightly smaller bounce for a smoother effect
            transition={{
                duration: 2.5, // Increase duration for a slower, smoother movement
                stiffness: 800, // Lower stiffness for a smoother bounce
                damping: 500, // Higher damping for a more controlled, subtle motion
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeOut", // 'easeOut' will make it slow down at the end for smoothness
            }}>
            <Image src={portal} alt={'portal'}/>
        </motion.div>
    )
}