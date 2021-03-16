import axios from 'axios';
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import authentication from './authentication';
import Home from './home';
import Login from './login';
import LogOut from './logout';
import Movies from './movies';
import Navbar from './navbar';
import NotFound from './notFound';
import ProtectedRoute from './protectedRoute';
import Register from './register';
import decodedToken from './token';
import Tv from './tv';






console.log(decodedToken);
    


class App extends Component {
    state = { 
       

     }


    render() { 
        let{movies,tv}=this.state
        return ( 
            <>

            <Navbar/>
            <div className="container py-5">

                <Switch>

                    {/* <ProtectedRoute path="/home" render={(props)=><Home {...props}  trendingMovies={movies} trendingTv={tv} />} /> */}
                    <ProtectedRoute path="/tv" component={Tv}/>
                    <ProtectedRoute path="/home" component={Home}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                    <ProtectedRoute path="/movies" component={Movies}/>
                    <Route path="/notFound"component={NotFound}/>
                    <Redirect from="/" exact to="/register"/>
                    <Redirect from="/logout" exact to="/login"/>
                    <Redirect to ="/notFound"/>

                </Switch>


            </div>
            </>
         );
    }
}


 
export default App;