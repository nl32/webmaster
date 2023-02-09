import { useEffect, useState } from "react"

type numProps = {
start:number
end: number
}
const num = ({start,end}:numProps) => {
    const [num,setNum] = useState(start)
    useEffect(()=>{
        if(num<end){
            window.setTimeout(()=>{
                setNum(num+1)
            },10)
        }
    },[num])
    return <>{num}</>
}
export default num;
