import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import'./userdetails.css';
export default function Userinfo (){

    const[Username,setusername]=useState("");
    const[usermobileno,setuserMobileno]=useState('');
    const[userGender,setuserGender]=useState('');
    const[useremail,setuseremail]=useState('');
    // const [error, setError] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
    //     window.alert('Registered successfully!');
    //     const register={username,email,country,password}
    //     if (username === '' || email === '' || password === '') {
    //         setError(true);
    //     } else {
            
    //         setError(false);
    //     }
    //     console.log(register);

    //     fetch("http://localhost:8080/postuserdetails",{
    //     method:"POST",
    //     headers:{"Content-Type":"application/json"},
    //     body:JSON.stringify(register)
        
    // }).then(()=>{
    //     console.log(register)
    // })
    // axios.post("https://localhost:8181")
    };
    const handleuserName = (e) => {
        setusername(e.target.value);
      
    };
    const handleuserEmail = (e) => {
        setuseremail(e.target.value);
       
    };
    const handleuserGender = (e) => {
        setuserGender(e.target.value);
        
    };
    const handleusermobileno = (e) => {
        setuserMobileno(e.target.value);
     
    };
    // const errorMessage = () => {
    //     return (
    //         <div
    //             className="error"
    //             style={{
    //                 display: error ? '' : 'none',
    //             }}>
    //             <h1>Please enter all the fields</h1>
    //         </div>
    //     );
    // };
 
    return(
        <div className="entire-register-div">
            <div className="register-div">
                <form name="register-form-1">
                    <div className="userinfo-name-div"><h1 className="hed">Please fill your details:</h1></div>
                    <div className="input-div">
                    <input onChange={handleuserName} className="input-username" value={Username} type="text" placeholder="Full Name"/>
                    <br></br>
                    <input onChange={handleuserEmail} className="input-email" value={useremail} type="text" placeholder="email"/><br></br>
                    <input onChange={handleuserGender}  value={userGender} type="text" placeholder="Gender"/><br></br>
                    <input onChange={handleusermobileno} className="input-password" value={usermobileno} placeholder="Mobile No"/><br></br><br></br>
                    
                    <button onClick={handleSubmit} className="btn" type="submit">NEXT</button></div>
                </form>
            </div>  
        </div>
    );
}