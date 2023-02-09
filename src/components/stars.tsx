import { Stage } from "@inlet/react-pixi";
import { useEffect, useRef } from "react";

const Stars = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(()=>{
        const canvas = canvasRef.current
        const context = canvas?.getContext("2d")
        if(!context) return;
        context.fillStyle="#000000"
        context.fillRect(0,0,context.canvas.width,context.canvas.height)

    })
    return <canvas ref={canvasRef}/>
}

export default Stars;
