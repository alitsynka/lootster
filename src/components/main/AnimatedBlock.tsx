'use client'
import {motion, useInView} from "framer-motion";
import style from './Main.module.scss';
import Image from "next/image";
import portal from "@/assets/images/portal.png";
import {useRef} from "react";

export const AnimatedBlock = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    return (
        <motion.div
            ref={ref}
            initial={{y: 0}}
            animate={isInView ? { y: [0, -30, 0] } : {y: 0}} // Slightly smaller bounce for a smoother effect
            transition={{
                duration: 2.5, // Increase duration for a slower, smoother movement
                repeat: isInView ? Infinity : 0,
                repeatType: "reverse",
                ease: "easeOut", // 'easeOut' will make it slow down at the end for smoothness
            }}
            className={style.SectionImg}
        >
            <Image src={portal} alt={'portal'}/>
        </motion.div>
    )
}