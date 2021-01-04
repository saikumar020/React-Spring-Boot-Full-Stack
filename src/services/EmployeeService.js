import axios from 'axios'

const EMPLOYEE_DETAILS= "http://localhost:8082/api/v1/employees"

class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_DETAILS);
    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_DETAILS,employee);
    }
    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_DETAILS+'/'+employeeId);
    }
    updateEmployee(employee,employeeId){
        return axios.put(EMPLOYEE_DETAILS+ '/' + employeeId, employee);
    }
    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_DETAILS + '/' + employeeId);
    }
}

export default new EmployeeService();