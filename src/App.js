
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Switch,BrowserRouter as Router,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import registrationTypeForm from './pages/registrationTypeForm';
import Footer from './components/footer'
import AboutTrack from './pages/AboutTrack';
import ScrollToTop from './components/scrollToTop';
function App() {
  return (
    <div className="App" >
      <Router>
      <NavBar/>
      <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/home' exact component={Home}/>
          <Route path='/register' exact component={registrationTypeForm}/>
          <Route path='/track/:track' exact component={AboutTrack}/>
        </Switch>
     </Router>
     <Footer />

    </div>
  );
}

export default App;
