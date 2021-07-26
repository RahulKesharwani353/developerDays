import React from 'react';
import '../components/css/footer.css';
import logo from '../assets/images/logo-white.png';
import moz_sq from '../assets/images/moz_sq.png'
import dsc_sq from '../assets/images/dsc_sq.svg'
import kug_sq from '../assets/images/kug_sq (1).svg'

const footer = () => {
    return (
        <div>
             <footer className="footer-distributed">
    <div className="row justify-content-center">
      <div className="col-lg-6 text-md-center text-sm-center text-center">
        <div className="footer-left">

<a href ="/home"><img src={logo} alt="Developer Days" style={{width:'200px' }}  /></a>
          
    
          <br/><br/>
      
        </div>
      </div>
      
      <div className="col-lg-6 text-md-center">
        
    <div className="footer-right">

      <p className="" style={{textAlign: 'center'}}>Contact Us</p>

      <form action="#" method="post">

        <a href="mailto:support@developerdays.tech"> <input type="text" name="email" placeholder="Email"/></a>


      </form>
      <br/>
      <div className="footer-icons">


        <a href="https://linktr.ee/mozilladurg" target="_blank"><img src ={moz_sq} alt= "moz" /></a>
        <a href="https://linktr.ee/kugdurg/" target="_blank"><img src ={kug_sq} alt= "KUG" /></a>
        <a href="https://linktr.ee/developer_student_community" target="_blank"><img src ={dsc_sq} alt= "DSC" /></a>
      

      </div>
    </div>
      </div>
    </div>

<hr/>
    <div className="col-12 text-center">
      <p className="footer-company-name">© 2021 Developer Days | Developed by 
        <a href="#" target="_blank" className="footer-links"> Developer Days Team</a>
      </p>
    </div>
    </footer> 
        </div>
    );
};

export default footer;