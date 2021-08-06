import React from 'react';
import '../components/css/footer.css';
import logo from '../assets/images/logo-white.png';
// import moz_sq from '../assets/images/moz_sq.png'
// import dsc_sq from '../assets/images/dsc_sq.svg'
// import kug_sq from '../assets/images/kug_sq (1).svg'

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
      <div class="footer-icons">


<a href="https://instagram.com/developerdays21" target="_blank" rel="noreferrer"><i class="fa fa-instagram"></i></a>
<a href="https://twitter.com/developerdays21" target="_blank" rel="noreferrer"><i class="fa fa-twitter"></i></a>
<a href="https://www.linkedin.com/company/developerdays" target="_blank" rel="noreferrer"><i class="fa fa-linkedin"></i></a>
<a href="https://discord.gg/yt9vBKqtVg" target="_blank" rel="noreferrer"><i class="fab fa-discord" rel="noreferrer"></i></a>
<a href="https://www.youtube.com/channel/UCBjYrL6mJ_K6DpA2qUGUDRw" target="_blank" rel="noreferrer"><i class="fa fa-youtube"></i></a>

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