import React, { Component, useState } from 'react';
import { Table } from 'antd';
import './index.css';
import QueryForm from './QueryForm';
import { employeeColumns } from './columns';
import { EmployeeResponse } from '../../interface/employee';
import {connect} from "react-redux"
// Hooks version
const Employee = (props:any) => {
    const [employee, setEmployee] = useState<EmployeeResponse>(undefined);
    const getTotal = () => {
        let total: number;
        if (typeof employee !== 'undefined') {
            total = employee.length
        } else {
            total = 0
        }
        return <p>共 {total} 名员工</p>
    }
    return (
        <>
            {/* <QueryForm name={'aaa'}/> */}
            <QueryForm onDataChange={setEmployee} {...props}/>
            {getTotal()}
            <Table columns={employeeColumns} dataSource={props.employee.employeeList} className="table" />
        </>
    )
}
// interface State {
//     employee: EmployeeResponse
// }

// class Employee extends Component<{}, State> {
//     state: State = {
//         employee: undefined
//     }
//     setEmployee = (employee: EmployeeResponse) => {
//         this.setState({
//             employee
//         });
//     }
//     getTotal() {
//         let total: number;
//         if (typeof this.state.employee !== 'undefined') {
//             total = this.state.employee.length
//         } else {
//             total = 0
//         }
//         return <p>共 {total} 名员工</p>
//     }
//     render() {
//         return (
//             <>
//                 <QueryForm onDataChange={this.setEmployee} />
//                 {/* {this.getTotal()} */}
//                 <Table columns={employeeColumns} dataSource={this.state.employee} className="table" />
//             </>
//         )
//     }
// }


const mapStatetoProps=(state:any)=>{
    return {
        employee:state
    }
}

export default connect(mapStatetoProps)(Employee)
