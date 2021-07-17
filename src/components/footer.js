import React from 'react';
import '../components/css/footer.css';
import logo from '../assets/images/logo-white.png';

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


        <a href="https://www.instagram.com/devStuCom" target="_blank"><i className="fa fa-instagram"></i></a>
        <a href="https://twitter.com/devStuCom" target="_blank"><i className="fa fa-twitter"></i></a>
        <a href="https://www.linkedin.com/company/devstucom/mycompany/" target="_blank"><i className="fa fa-linkedin"></i></a>
        <a href="https://github.com/devStuCom"><i className="fa fa-github"></i></a>
        <a href="https://www.youtube.com/channel/UCT6bau44YmuFM3Qu_de6W_w" target="_blank"><i className="fa fa-youtube"></i></a>

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