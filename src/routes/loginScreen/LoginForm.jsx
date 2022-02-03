export default function LoginForm() {
    return (
    <form>
    <div class="mb-3">
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Username" aria-describedby="emailHelp" required/>
    </div>
    <div class="mb-3">
        <input type="password" class="form-control" placeholder="Password" id="exampleInputPassword1" required/>
    </div>

    <div class="form-text mb-3">We'll never store any of your information <span style={{color: "#e25555"}}>&#9829;</span></div>

    <button type="submit" class="btn btn-primary w-100">Login</button>
    </form>
    )
}