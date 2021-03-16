import axios from 'axios';
import Joi from 'joi';
import React, { Component } from 'react';
import SecureLS from 'secure-ls';
import authentication from './authentication';





 let ls = new SecureLS({encodingType: 'aes'});




class Login extends Component {
    state = { 
        email:'',
        password:'',
        error:'',

     }


     
     validationLoginForm=()=>{

        let state={...this.state}
        delete state.error
        const schema = Joi.object({
           
        email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,10}$')),

        })

       return schema.validate(state,{abortEarly:false})

     }


     
     loginFormChange=(e)=>{
        let state= {...this.state};
        state[e.target.name]= e.target.value;
        this.setState({[e.target.name]:state[e.target.name]});

    }


    sendLoginData= async ()=>{

        
        let state={...this.state};
        delete state.error;

        let {data}= await axios.post("https://route-egypt-api.herokuapp.com/signin",state) 
        if(data.message==="success"){



            authentication.logIn(()=> {this.props.history.replace('/home')
        
        
                  } )



         ls.set("currentUsser",data.token)


            
        }
        else{
            
        }

     }

     submitLoginForm=(e)=>{
        e.preventDefault();

     let validation= this.validationLoginForm()
   if(validation.error){

       let state={...this.state};
       state.error=validation.error.message;
       console.log( state.error)
       this.setState(state)

   }
   else{

     this.sendLoginData()

       
   }

   
    }


    render() { 
        return (
            <>

            <h1>Log in</h1>
            {this.state.error&& this.state.error.split('.').map((x)=>

            <div  className="alert alert-danger w-50"> {x} </div>

            )}

            <form onSubmit={this.submitLoginForm}>
            <label htmlFor=""> Email</label>
            <input type="email" name="email" onChange={this.loginFormChange} value={this.state.email} className="form-control" />
            <label htmlFor=""> Password</label>
            <input type="password" name="password" onChange={this.loginFormChange} value={this.state.password} className="form-control" />
            <button type="submit" className="btn btn-info" >
                Submit  
            </button> 
            </form>

            </>


         );
    }
}
 
export default Login;