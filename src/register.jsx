import axios from 'axios';
import Joi from 'joi';
import React, { Component } from 'react';





class Register extends Component {
    state = { 
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        age:'',
        error:''


     }


     validationRegisterForm=()=>{

        let state={...this.state}
        delete state.error
        const schema = Joi.object({
            first_name: Joi.string()
                .alphanum()
                .min(3)
                .max(10)
                .required()  ,
                last_name: Joi.string()
                .alphanum()
                .min(3)
                .max(10)
                 .required(),

                email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,10}$')),
        age: Joi.number()
        .integer()
        .min(10)
        .max(80),

        })

       return schema.validate(state,{abortEarly:false})




     }





     registerFormChange=(e)=>{
         let state= {...this.state};
         state[e.target.name]= e.target.value;
         this.setState({[e.target.name]:state[e.target.name]});

     }



     sendRegisterData= async ()=>{

        
        let state={...this.state};
        delete state.error;

        let {data}= await axios.post("https://route-egypt-api.herokuapp.com/signup",state) 
        if(data.message==="success"){


             this.props.history.replace('/login')
            
        }
        else{
            
        }

     }




     submitRegisterForm=(e)=>{
         e.preventDefault();

      let validation= this.validationRegisterForm()
    if(validation.error){

        let state={...this.state};
        state.error=validation.error.message;
        console.log( state.error)
        this.setState(state)

    }
    else{

      this.sendRegisterData()

        
    }

    
     }






    render() { 
        return ( <>

        <h1>Register</h1>

        {this.state.error&& this.state.error.split('.').map((x)=>


        <div  className="alert alert-danger w-50"> {x} </div>


        )}

        <form onSubmit={this.submitRegisterForm}>
            <label htmlFor=""> First Name</label>
            <input type="text" name="first_name" onChange={this.registerFormChange} value={this.state.first_name} className="form-control" />
            
        

            <label htmlFor=""> last Name</label>
            <input type="text" name="last_name" onChange={this.registerFormChange} value={this.state.last_name} className="form-control" />
        
            <label htmlFor=""> Email</label>
            <input type="email" name="email" onChange={this.registerFormChange} value={this.state.email} className="form-control" />
            <label htmlFor=""> Password</label>
            <input type="password" name="password" onChange={this.registerFormChange} value={this.state.password} className="form-control" />
            <label htmlFor=""> Age</label>
            <input type="number" name="age" onChange={this.registerFormChange} value={this.state.age} className="form-control" />
            <button type="submit" className="btn btn-info" >
                Submit  
            </button> 

        </form>
        
        
        
        
        </> );
    }
}
 
export default Register;