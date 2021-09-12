import React, { useState, useEffect ,useMemo} from 'react';

export default function UserMemoPage() {
    const  [count,setCount] = useState(0);
    // const expensive = ()=>{
    //     console.log('computer');
    //     let sum = 0;
    //     for(let i =0;i<count;i++){
    //         sum+=i;
    //     }
    //     return sum;
    // }
    const expensive = useMemo(
        ()=>{
            console.log('computer');
            let sum = 0;
            for(let i =0;i<count;i++){
                sum+=i;
            }
            return sum;
        },[count]
    )
    const [value,setValue] = useState('');
    return(
        <>
        <p>count:{count}</p>
        {/* <p>expensive:{expensive()}</p> */}
        <p>expensive:{expensive}</p>
        <button onClick={()=>setCount(count+1)} >add</button>
        <input value={value} onChange={event=>setValue(event.target.value)} />
        </>
    )
};
