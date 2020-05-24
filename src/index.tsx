// let hello : string = "hello TypeScript"
// document.querySelectorAll('.app')[0].innerHTML = hello
// // console.log([1,2,[3,4]].flat())

// console.log(process,'index');

import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./reducers/employee/index.js"
// import Hello from "./demo/Hello";
// import HelloClass from "./demo/HelloClass";
// import HelloHOC from "./demo/HelloHOC";
// import HelloHooks from "./demo/HelloHooks";

// import App from "./App";
import 'antd/dist/antd.css';

import Root from "./routers/index"


// ReactDOM.render(<HelloHooks name="TypeScrity"/>,document.querySelectorAll('.app')[0])
ReactDOM.render(
        <Provider store={store}>
              <Root />
        </Provider>
        ,document.querySelectorAll('.app')[0])