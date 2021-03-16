import { Redirect, Route } from "react-router-dom";
import authentication from "./authentication";




const ProtectedRoute = ({component:Component , ...rest}) => {
    return ( 
        <Route {...rest} render={(props)=>{

            if(authentication.isAuthenticated()){

                return <Component {...props}/>
            }
            else{
              return  <Redirect to="/login"/>
            }



        }}   />

        


     );
}
 
export default ProtectedRoute;