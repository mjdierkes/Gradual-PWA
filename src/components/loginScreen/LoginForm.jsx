import { useState } from "react";

function LoginForm({ loginFormSubmitted, isLoading }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
     
    const handleSubmit = (evt) => {
        evt.preventDefault();
        loginFormSubmitted(username, password);
    }

    return (
        <form onSubmit={handleSubmit}>
<div class="mb-3">
    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Username" value={username} onChange={(evt) => setUsername(evt.target.value)} aria-describedby="emailHelp" required/>
</div>
<div class="mb-3">
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(evt) => setPassword(evt.target.value)} required/>
</div>

<div class="form-text mb-3">We'll never store any of your information <span style={{color: "#e25555"}}>&#9829;</span></div>

<button type="submit" class="btn btn-dark w-100 rounded">{isLoading ? <div class="spinner-border text-light" style={{width: "1rem", height: "1rem"}} role="status">
  <span class="visually-hidden">Loading...</span>
</div> : "Login"}</button>
</form>
    )
}


export default LoginForm