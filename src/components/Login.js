import { useState } from "react";

function Login() {
    const [data, setData] = useState({ username: '', password: '' })

    function handleFormSubmit(e) {
        e.preventDefault();

        console.log(data);
        alert(JSON.stringify(data))

    }

    function handleInputChange(e, name) {
        setData({ ...data, [name]: e.target.value })
    }
    return (
        <>
            <h1>Login Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label>Username:
                    <input
                        type="text"
                        value={data.username}
                        onChange={(e) => handleInputChange(e, 'username')}
                    >
                    </input>
                </label>

                <label>Password:
                    <input
                        type="password"
                        value={data.passsword}
                        onChange={(e) => handleInputChange(e, 'password')}
                    >
                    </input>
                </label>

                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login;