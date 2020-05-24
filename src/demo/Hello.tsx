import React from "react";
import {Button} from "antd"
interface Greeting {
    name:string;
    firstName:string;
    lastName:string;
}
const Hello = (props:Greeting) => (<Button>Hello {props.name}</Button>)

Hello.defaultProps = {
    firstName:"",
    lastName:"",
}
// const Hello:React.FC<Greeting> = ({
//     name,
//     firstName,
//     lastName
// })=>(<Button>Hello {name}</Button>)


export default Hello