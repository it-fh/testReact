import React, { useState,useEffect} from 'react';
export default function HooksPage() {
    const[count,setCount] = useState(0);
    useEffect(()=>{
        console.log(1);
        document.title = `${count}`
    },[count]);
return (
    <>
    <p>{count}</p>
    <button onClick={()=>setCount(count+1)}>点击</button>
    <p>{useClock().toLocaleString()}</p>
    </>
)
};
function useClock(){
    const[date,setDate] = useState(new Date());
    useEffect(()=>{
        console.log(1);
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return ()=>clearInterval(timer);
    },[])
    return date
}
