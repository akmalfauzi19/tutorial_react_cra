import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');

    function LoginHandler(event) {
        const form = document.getElementById('form_id');
        event.preventDefault();
        // console.log(form.password.value);
        const data = {
            username: "admin",
            password: "123"
        };

        const login = true;

        if (login) {
            if (data.username === form.username.value && data.password === form.password.value) {
                console.log('berhasil login');
                setMessage('');
                return navigate('/blogs');
            } else {
                return setMessage('password atau username salah !!');
            }
        }

    }

    return (
        <>
            <div style={{ color: "red" }}>{message}</div>
            <form onSubmit={LoginHandler} id="form_id">
                <input name="username" type="text" placeholder="username" />
                <input name="password" type="password" placeholder="password" />
                <button type="submit">Login</button>
            </form>
        </>
    );
}

export default Login;