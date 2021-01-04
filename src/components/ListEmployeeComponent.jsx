import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            employees:[]
        }
        this.addEmployee=this.addEmployee.bind(this);
        this.editEmployee=this.editEmployee.bind(this);
        this.deleteEmployee=this.deleteEmployee.bind(this);
        this.viewEmployee=this.viewEmployee.bind(this);
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>{
            this.setState({employees:res.data})
            console.log(res);
        });
    }
    addEmployee(){
        this.props.history.push("/add-employee/_add");
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }
    deleteEmployee(eid){
       EmployeeService.deleteEmployee(eid).then(res=>{
        this.setState({employees: this.state.employees.filter(employee=> employee.eid !== eid)});
       });
    }
    viewEmployee(eid){
        this.props.history.push(`/view-employee/${eid}`);
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Employees Details</h2>
                <div className="container">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="container">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Employee FirstName</th>
                            <th>Employye LastName</th>
                            <th>Employee EmailId</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                <tr key={employee.eid}>
                                    <td>{ employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                    <button className="btn btn-info" onClick={()=>this.editEmployee(employee.eid)}>Update</button>
                                    <button style={{marginLeft: "10px"}} className="btn btn-danger" onClick={()=>this.deleteEmployee(employee.eid)}>Delete</button>
                                    <button style={{marginLeft: "10px"}} className="btn btn-info" onClick={()=>this.viewEmployee(employee.eid)}>View</button>
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                    </table>
                    </div>
                
            </div>
        );
    }
}

export default ListEmployeeComponent;
