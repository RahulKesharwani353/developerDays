
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Switch,BrowserRouter as Router,Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App" >
      <Router>
      <NavBar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          //Add another path here for different pages
        </Switch>
     </Router>

    </div>
  );
}

export default App;
