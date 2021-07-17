
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Switch,BrowserRouter as Router,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import registrationTypeForm from './pages/registrationTypeForm';
import Footer from './components/footer'
function App() {
  return (
    <div className="App" >
      <Router>
      <NavBar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/home' exact component={Home}/>
          <Route path='/register' exact component={registrationTypeForm}/>
        </Switch>
     </Router>
     <Footer />

    </div>
  );
}

export default App;
