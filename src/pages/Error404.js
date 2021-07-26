import React from 'react';
import error_logo from '../assets/images/404.svg'
const Error404 = () => {
    return (
        <div style={{height:'100vh' ,  textAlign:'center'}}>
            <img src={error_logo} alt="page not found logo" style={{width:'40%', marginTop:'3%'}}/>
            <h1>Oops! Page Not Found</h1>
        </div>
    );
};

export default Error404;