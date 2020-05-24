import React,{useEffect,useState} from "react";
import {Button} from "antd"
interface Greeting {
    name:string;
    firstName:string;
    lastName:string;
}

interface Loading {
    name:string
}
const Loading = (props:Loading)=>{

    useEffect(()=>{
        console.log('刷新了');

        return ()=>{
            console.log('挂了');
        }
        
    })

    return <div>{props.name}</div>
}

const HelloHooks = (props:Greeting) =>{
    const [count,setCount]  = useState(0);
    const [status,setStatus]  = useState<Boolean>(true);
    const [text,setText] = useState<string | null>(null)
    useEffect(()=>{
        if(count>5){
            setText('休息一下')
        }
        
    },[count])
    return  (
        <>
                <p>你点击了 {count} {text}</p>
                {status?<Loading name="loading..."/>:''}
                <Button onClick={()=>{setCount(count+1)}}>Hello {props.name}</Button>
                <Button onClick={()=>{setStatus(false)}}>卸载</Button>
            </>
    )
}

HelloHooks.defaultProps = {
    firstName:"",
    lastName:"",
}

export default HelloHooks