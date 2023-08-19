import React,{useState} from "react";
import axios from "axios";






const Login=()=>{
    
    let [username,setUsername]=useState("")
    let [password,setPassword]=useState("")
   
    let[error,setError]=useState("")
    let[success,setSuccess]=useState("")
    let[token,setToken]=useState("")

       let  user={username:" " , password:" "}

       function verifyUser(e) {
        e.preventDefault();
        let user = {
          username,
          password,
        };
    
        if (!username || !password) {
          setError("Username and password are required.");
          setSuccess("");
        } else {
          axios
            .post("https://dummyjson.com/auth/login", user)
            .then((response) => {
              if (response.status === 200) {
                setToken(response.data.token);
                setError("");
                setSuccess("Login successful!");
              } else {
                setError("Invalid credentials.");
                setSuccess("");
              }
            })
            .catch((error) => {
              setError("An error occurred.");
              setSuccess("");
            });
        }
      }


    return(
              
             <div   className="Login">
                  <h1>Login</h1>

            <label for="name">Name :</label><br />
            <input type="text" placeholder="" onChange={(e)=>setUsername(e.target.value)}></input><br />
            
            <label for="name">Password :</label><br />
            <input type="password" placeholder="" onChange={(e)=>setPassword(e.target.value)}></input><br />
            


            <button onClick={verifyUser}>submit</button>
            {error && <h1 style={{color:"red"}}> {error}</h1>}
         {success && <h1 style={{color:"green"}}>{success}</h1>}


          

        </div>
     
    )
}
export default Login;