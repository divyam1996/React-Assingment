import React from 'react';
import {connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { tsMethodSignature } from '@babel/types';
class Table extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            tableArray:[]
        }
    }
    componentWillReceiveProps(p1,p2)
    {
        console.log("=============PROPS YE",p2,p1);
        console.log("=================>WCALL0",this.state);
        
        this.setState({...this.state,tableArray:p1.tableArray},()=>{
            console.log("-dstatr",this.state);  
        });
    }
    
    componentDidMount()
    {
        console.log("====================>>>>>>>>>>>>>>>>>>>stata",this.state );
    }
    render()
    {
        return(
            this.state.tableArray.length>0?
            <table className="table table-striped table-sm table-bordered">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Profile Picture</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableArray.map((data,index)=>{
                        return (
                            <tr>
                                <td>
                                    {data.firstName}
                                </td>
                                <td>
                                    {data.lastName}
                                </td>
                                <td>
                                    <img src ={data.proPic} alt="not available" style={{height:"100px",width:"100px"}}/>
                                </td>
                                <td>
                                    {data.number}
                                </td>
                                <td>
                                    {data.Email}
                                </td>
                                <td>
                                    {data.Address}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
        </table>:null
        );
    }
}
const mapStatetoProps = state => {
    console.log(state);
    return (
        {
            tableArray:state
        }
    )
};
export default Table = connect(mapStatetoProps)(Table);