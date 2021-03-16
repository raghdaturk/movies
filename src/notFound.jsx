import React, { Component } from 'react';
import notFondStyle from "./notFound.module.css"


class NotFound extends Component {
    state = {  }
    render() { 
        return ( 
            <>
        
        <section className="d-flex align-items-center justify-content-center h-100 "> 


        <h1 className={`text-center ${notFondStyle.bigFont}`}> 404 Page </h1>
        
        </section> 
        </> 
        );
    }
}
 
export default NotFound;