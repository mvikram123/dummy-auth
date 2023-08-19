import React,{useState} from "react";
import axios from "axios";






const Signup=()=>{
    let [name,setName]=useState("")
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let [confirmPassword,setConfirmPassword]=useState("")
    let[error,setError]=useState("")
    let[success,setSuccess]=useState("")
    let[user,setUser]=useState("")

         user={name:" " , email:" " , password:" ",confirmPassword:" "}

    function addUser(e){
        e.preventDefault()
        let{name,email,password,confirmPassword}=user

        if(!name || !password|| !email|| !confirmPassword){

            setError("All fields are required")
            setSuccess("")
            return
        } 
        if(password.length<8){

            setError("minimum 8 characters are required")
            setSuccess("")
            return
        }


        if(password!==confirmPassword){

            setError("Password did not match")
            setSuccess("")
            return
        }

        setSuccess("user added successfully")


    }

    // axios.post("https://dummyjson.com/docs/auth/signup",
    //     {
    //         name,
    //         email,
    //         password,

    //     }
    // )


   // .then(response=>console.log(response))
    //.catch(err=>console.log(err))

    return(
            <form className="form">
                <h1>Signup</h1>
             <div   className="signup">
            <label for="name">Name :</label>

            <input type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}></input>
            <label for="name">Email :</label>

            <input type="email" placeholder="Enter your email
             " onChange={(e)=>setEmail(e.target.value)}></input>

            <label for="name">Password :</label>
            <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}></input>

            <label for="name">Confirm Password :</label>
            <input type="password" placeholder="Enter confirm password" onChange={(e)=>setConfirmPassword(e.target.value)}></input>


            <button onClick={addUser}>submit</button>
           {error &&  <h1 style={{color:"red"}}></h1>}
           {success && <h1 style={{color:"green"}}/>}


          

        </div>
        </form>
    )
}
export default Signup;