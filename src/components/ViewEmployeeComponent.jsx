import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            eid: this.props.match.params.eid,
            employee : {}
        }
        this.homeEmployee= this.homeEmployee.bind(this);
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.eid).then(res => {
            this.setState({employee : res.data})
        })
    }
    homeEmployee(){
        this.props.history.push("/employees");
    }
    render() {
        return (
            <div className="container">
                <br></br>
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h3 className="text-center">View Employee Details</h3>
                        <div className="row">
                            <h6>Employee ID: </h6>
                            {this.state.employee.eid}
                        </div>
                        <div className="row">
                            <h6>Employee FirstName: </h6>
                            {this.state.employee.firstName}
                        </div>
                        <div className="row">
                            <h6>Employee LastName: </h6>
                            {this.state.employee.lastName}
                        </div>
                        <div className="row">
                            <h6>Employee EmailId: </h6>
                            {this.state.employee.email}
                        </div>
                    </div>
                </div>
                <div className="container">
                    <button className="btn btn-primary" onClick={this.homeEmployee}>Home</button>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;