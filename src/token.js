import SecureLS from 'secure-ls';
import jwt_decode from "jwt-decode";



let ls = new SecureLS({encodingType: 'aes'});

let encodedToken= ls.get("currentUsser");  

let decodedToken = jwt_decode (encodedToken);



export default decodedToken;





