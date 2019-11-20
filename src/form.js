import React from 'react';
import {connect } from 'react-redux';
import {addAction} from './redux';
import Table from './table';
import 'bootstrap/dist/css/bootstrap.min.css';
import {store} from './redux';
class Form extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            fieldValue:{
                firstName:'',
                lastName:'',
                proPic:"",
                Email:"",
                Address:"",
                number:""
            },
            errMessage:{
                firstNameErr:"",
                lastNameErr:"",
                emailErr:"",
                addressErr:"",
                numberErr:""
            },
            tableArray:[],
            isValid:false,
        }
    }
    componentDidMount()
    {
        console.log("==>>>",this.props);
    }
    componentWillReceiveProps(pro,pro1)
    {
        console.log("====>?",this.props);
    }
    fNameHandler = (e)=>{
        let firstName = e.target.value;
        let fieldObj = this.state.fieldValue;
        let errObj = this.state.errMessage;
        let isValid = false;
        fieldObj.firstName = firstName;
        if(fieldObj.firstName.length>15){
            errObj.firstNameErr = "First name should be less than 15 characters";
            isValid=false;
        }else if(fieldObj.firstName == ""){
            errObj.firstNameErr = "field required*";
            isValid=false;
        }else{
            errObj.firstNameErr = "";
            isValid= true;
        }
        this.setState({fieldObj:fieldObj,errObj:errObj,isValid:isValid});
    }
    lNameHandler = (e)=>{
        let lastName = e.target.value;
        let fieldObj = this.state.fieldValue;
        let errObj = this.state.errMessage;
        let isValid = false;
        fieldObj.lastName = lastName;
        if(fieldObj.lastName.length>15){
            errObj.lastNameErr = "Last name should be less than 15 characters";
            isValid=false;
        }else if(fieldObj.lastName == ""){
            errObj.lastNameErr = "field required*";
            isValid=false;
        }else{
            errObj.lastNameErr = "";
            isValid = true;
        }
        this.setState({fieldObj:fieldObj,errObj:errObj,isValid:isValid});
    }
    pictureHandler = (e)=>{
        let fieldObj = this.state.fieldValue;
        let errObj = this.state.errMessage;
        let isValid = false;
        fieldObj.proPic = URL.createObjectURL(e.target.files[0]);
        this.setState({fieldObj:fieldObj,errObj:errObj,isValid:isValid});
    }
    numberHandler = (e)=>{
        let number = e.target.value;
        let fieldObj = this.state.fieldValue;
        let errObj = this.state.errMessage;
        let isValid = false;
        fieldObj.number = number;
        if(!fieldObj.number.match(/^[0-9]{10}$/)){
            errObj.numberErr = "Number should be 10 digits";
        }else if(fieldObj.number == ""){
            errObj.numberErr = "field required*";
        }else{
            errObj.numberErr = "";
            isValid = true;
        }
        this.setState({fieldObj:fieldObj,errObj:errObj,isValid:isValid});
    }
    emailHandler = (e)=>{
        //console.log(e.target.value);
        let email = e.target.value;
        let fieldObj = this.state.fieldValue;
        let errObj = this.state.errMessage;
        let isValid=false;
        fieldObj.Email = email;
        if(!fieldObj.Email.match(/^[\w+\-.]{1,}@(gmail|yahoo|outlook){1}(.com|.in|.co.in|.co.uk)$/i)){
            errObj.emailErr = "email incorrect";
            isValid=false;
        }else if(fieldObj.email == ""){
            errObj.emailErr = "field required*";
            isValid=false;
        }else{
            errObj.emailErr = "";
            isValid=true;
        }
        this.setState({fieldObj:fieldObj,errObj:errObj,isValid:isValid});
    }
    addressHandler = (e)=>{
        let address = e.target.value;
        let fieldObj = this.state.fieldValue;
        let errObj = this.state.errMessage;
        let isValid=false;
        fieldObj.Address = address;
        if(fieldObj.Address.length>250){
            errObj.addressErr = "address should not be more than 250 characters";
            isValid=false;
        }else if(fieldObj.address == ""){
            errObj.addressErr = "field required*";
            isValid=false;
        }else{
            errObj.addressErr = "";
            isValid = true;
        }
        this.setState({fieldObj:fieldObj,errObj:errObj,isValid:isValid});
    }
    submitHandler = (e)=>{
        e.preventDefault();
        let newValues = {
            firstName:"",
            lastName:"",
            number:"",
            proPic:"",
            Email:"",
            Address:"",

        }
        let tableObject = {};
        tableObject.firstName = this.state.fieldValue.firstName;
        tableObject.lastName = this.state.fieldValue.lastName;
        tableObject.proPic = this.state.fieldValue.proPic;
        tableObject.Email = this.state.fieldValue.Email;
        tableObject.Address = this.state.fieldValue.Address;
        tableObject.number = this.state.fieldValue.number;

        let tableArray = this.state.tableArray;
        tableArray.push(tableObject);
        let action = {
            type:"Add",
            tableArray:tableArray
        }
        store.dispatch(action);
        console.log(this.props.tableArray);
        this.setState({tableArray:tableArray,fieldValue:newValues});
    }
    componentDidMount()
    {

    }
    componentWillReceiveProps(p1,p2)
    {
        console.log("===============>>>>>>>>>>>>>>>",p1,p2);
    }

    render()
    {
        return(
            <div>
            <div className="form-outer">
            <div className='container'>
                <div className='row'>
                        <div className="col-12" >
                            <p><b><span>* All Fields Are Mandatory</span></b></p>
                            
                            <br></br>
                            
                            <form onSubmit={this.submitHandler} >
                                <div className="form-group">

                                    <label for="first name">First Name <span>*</span></label>
                                    <input id="first name" className="form-control" type='text' value={this.state.fieldValue.firstName} placeholder="First Name" onChange={this.fNameHandler}/>
                                    <div className="text-danger">{this.state.errMessage.firstNameErr}</div>

                                </div>

                                <div className="form-group">

                                    <label for="last name">Last Name <span>*</span></label>
                                    <input id="last name" className="form-control" type='text' value={this.state.fieldValue.lastName} placeholder="Last Name" onChange={this.lNameHandler}/>
                                    <div className="text-danger">{this.state.errMessage.lastNameErr}</div>

                                </div>

                                <div className="form-group">

                                    <label for="picture" >Picture <span>*</span></label>
                                    <input id="picture" type='file'accept="image/jpeg,image/jpg,image/png" onChange={this.pictureHandler}/>
                                    <div className="text-danger"></div>

                                </div>

                                <div className="form-group">

                                    <label for="number">Number <span>*</span></label>
                                    <input id="number" className="form-control" type='text' value={this.state.fieldValue.number} placeholder="Contact Number" onChange={this.numberHandler}/>
                                    <div className="text-danger">{this.state.errMessage.numberErr}</div>

                                </div>

                                <div className="form-group">
                                    <label for="email">ID <span>*</span></label>
                                    <input id="email" className="form-control" type='email' value={this.state.fieldValue.Email} placeholder="Email" onChange={this.emailHandler}/>
                                    <div className="text-danger">{this.state.errMessage.emailErr}</div>
                                </div>

                                <div className="form-group">
                                    <label for="address">Address <span>*</span></label>
                                    <textarea id="address" className="form-control" type='text' value={this.state.fieldValue.Address} placeholder="Address" rows='1' onChange={this.addressHandler}/>
                                    <div className="text-danger">{this.state.errMessage.addressErr}</div>
                                </div >

                                <div className="form-group" style={{"text-align":"center"}}>
                                    <input className="btn-success btn" type="submit" value ="submit" disabled={!this.state.isValid}/>
                                </div>

                            </form>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="table">
                        <Table tableArray={[]}/>
                    </div>
                    </div>
            
               
        );
    }
}
const mapStatetoProps = state => {
    //console.log(state);
    return (
        {
            tableArray:state
        }
    )
};
export default Form = connect(mapStatetoProps)(Form);
