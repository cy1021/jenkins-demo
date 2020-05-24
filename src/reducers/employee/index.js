


import {createStore} from "redux";

const initState = {
    employeeList:[]
}

function setEmployee (state = initState,action){
    switch (action.type){
        case 'SETEMPLOYEE':
            return {...state,employeeList:action.payload}
        default : 
            return state
    }
}

const store = createStore(setEmployee)

export default store