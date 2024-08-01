import React,{useEffect,useRef} from "react";
import {motion,useInView,useAnimation} from "framer-motion";


export const Reveal=({ width = "fit-content", children = "Hello, World" })=>{

    const ref=useRef(null);
    const isInView=useInView(ref,{once:true});
    const mainControls=useAnimation();


    useEffect(()=>{
        if(isInView){
            mainControls.start("visible");
        }
    },[isInView,mainControls])

    return(
        <div
        ref={ref}
         style={{position:"relative",width:`${width}`, overflow:"hidden"}}>
            <motion.div
            variants={{
                hidden:{opacity:0,y:100},
                visible:{opacity:1,y:0}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration:0.8, delay:0.25}}
            >{children}</motion.div>
        </div>
    )
}