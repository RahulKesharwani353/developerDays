
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Switch,BrowserRouter as Router,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import registrationTypeForm from './pages/registrationTypeForm';
import Footer from './components/footer'
import AboutTrack from './pages/AboutTrack';
import ScrollToTop from './components/scrollToTop';
import Error404 from './pages/Error404';
import FloatingBtn from './components/FloatingBtn';
import LeaderBoard from './pages/LeaderBoard';
import ShedulePage from './pages/shedulePage';
function App() {
  return (
    <div className="App" >
      <Router>
      <NavBar/>
      <FloatingBtn />
      <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/home' exact component={Home}/>
          <Route path='/register' exact component={registrationTypeForm}/>
          <Route path='/leaderboard' exact component={LeaderBoard}/>
          <Route path='/schedule' exact component={ShedulePage}/>
          <Route path='/track/:track' exact component={AboutTrack}/>
          <Route component={Error404}/>
        </Switch>
     </Router>
   
     <Footer />

    </div>
  );
}

export default App;
