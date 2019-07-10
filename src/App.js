import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/landpage/Home';
import { NoMatch } from './pages/NoMatch';
import Login from './pages/landpage/Login';
import UserHome from './pages/user/UserHome';
import ExecutiveHome from './pages/executive/ExecutiveHome';
import InfoContratos from './components/userTipes/user/contracts/InfoContratos';
import ContractState from './context/contract/ContractState';
import ExecutiveAddContract from './pages/executive/ExecutiveAddContract';
import ListContracts from './pages/user/ListContracts';
import Deposit from './pages/user/Deposit';

const App = () => {
  return (
    <ContractState>
      <Router>
        <React.Fragment>
          <Switch>
            {/* Landing page pages */}
            <Route exact path="/" component={Home} />
            <Route exact path='/login' component={Login} />
            {/* User pages */}
            <Route exact path='/user' component={UserHome} />
            <Route exact path='/user/contratos' component={InfoContratos} />
            <Route exact path='/user/lista-contratos' component={ListContracts} />
            <Route exact path='/user/depositar' component={Deposit} />
            {/* Executive pages */}
            <Route exact path='/ejecutivo' component={ExecutiveHome} />
            <Route exact path='/ejecutivo/agregar-contrato' component={ExecutiveAddContract} />
            <Route component={NoMatch} />
          </Switch>
        </React.Fragment>
      </Router>
    </ContractState>
  );
}

export default App;
