import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponent/>
      <Switch>
          <div className="Container">
              <Route exact path="/" component={ListEmployeeComponent}></Route>
              <Route path="/employees" component={ListEmployeeComponent}></Route>
              <Route path="/add-employee/:eid" component={CreateEmployeeComponent}></Route>
              <Route path="/view-employee/:eid" component={ViewEmployeeComponent}></Route>
              {/*<Route path="/update-employee/:eid" component={UpdateEmployeeComponent}></Route>*/}
          </div>
      </Switch>
    <FooterComponent/>
    </Router>
    </div>

    
  );
}

export default App;
