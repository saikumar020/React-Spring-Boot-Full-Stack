import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state={
            eid:this.props.match.params.eid,
            firstName:'',
            lastName:'',
            email:''
        } 
        this.changeFirstName=this.changeFirstName.bind(this);  
        this.changeLastName=this.changeLastName.bind(this); 
        this.changeEmail = this.changeEmail.bind(this); 
        this.updateEmployee = this.updateEmployee.bind(this);
        this.cancelEmployee= this.cancelEmployee.bind(this);
    }
    componentDidMount(){
            EmployeeService.getEmployeeById(this.state.eid).then((res)=>{
                let employee = res.data;
                this.setState({firstName:employee.firstName,
                lastName:employee.lastName,
                email:employee.email
                });
            });
    }
    changeFirstName=(event) =>{
        this.setState({firstName:event.target.value});
    }
    changeLastName=(event)=> {
        this.setState({lastName : event.target.value});
    }
    changeEmail=(event)=>{
        this.setState({email: event.target.value});
    }
    updateEmployee=(e) =>{
        e.preventDefault();
        let employee = { firstName: this.state.firstName, lastName : this.state.lastName, email: this.state.email}
        console.log(JSON.stringify(employee));
        EmployeeService.updateEmployee(employee,this.state.eid).then((res)=>{
                this.props.history.push("/employees");
        });
    }
    cancelEmployee(){
        this.props.history.push('/employees');
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <div className="text-center">
                            <h3>Update Employee</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input type ="text" placeholder="fist Name" name="firstName" className="form-control"
                                    value={this.state.firstName} onChange={this.changeFirstName} required></input>
                                </div>
                                <div className="form-group">
                                    <label>Last Name:</label>
                                    <input type ="text" placeholder="last Name" name="lastName" className="form-control"
                                    value={this.state.lastName} onChange={this.changeLastName} required></input>
                                </div>
                                <div className="form-group">
                                    <label>Email Id: </label>
                                    <input type ="email" placeholder="Email Id" name="email" className="form-control"
                                    value={this.state.email} onChange={this.changeEmail} required></input>
                                </div>
                                <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancelEmployee} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
               
            </div>
        );
    }
}

export default UpdateEmployeeComponent;