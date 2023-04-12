
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Login = (props) => {
    let history = useNavigate();
    const [credentials, setcredentials] = useState({email: "", password: ""});
    const handleChange = (e)=>{
        setcredentials({...credentials, [e.target.name]: e.target.value});
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
               },
               body: JSON.stringify({email: credentials.email, password: credentials.password})
          });
          const json = await response.json();
          console.log({json});
          if(json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            props.showAlert("LoggedIn Successfully", 'success');
            history("/");

          }
          else{
            props.showAlert("Invalid Credentials", 'danger');
          }
    }
    return (
        <div>
            <h2>Login to continue to iNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={handleChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login