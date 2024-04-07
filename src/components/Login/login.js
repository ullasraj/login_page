import "./login.css"
import EmailIcon from '@mui/icons-material/Email';

export const Login = () => {

    return (
        <div className="loginPage">
            <div className="loginBox">
                <h1 className="loginHeader">Login</h1>
                <i class="fa fa-envelope icon"></i>
                <input type="text" placeholder="Email" className="loginInput" EmailIcon></input>
                <input type="password" placeholder="Password" className="loginInput"></input>
                <a href="" color="white">Forgottern password</a>
                <button>Login</button>
                <p>Login IN with</p>
            </div>

        </div>
    )
}