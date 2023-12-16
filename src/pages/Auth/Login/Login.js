import { useState } from 'react'
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        const apiUrl = 'http://localhost:5000/api/user/login';

        // Замените данные в body на те, которые вы хотите отправить на сервер
        const postData = {
            email: 'example@email.com',
            password: 'securepassword',
        };

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Дополнительные заголовки, если необходимо
            },
            body: JSON.stringify(postData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });


    }


    return (
        <div className='login__site'>
            <div className='login__form'>
                <h1>Login</h1>
                <div>
                    <h1>Your Email</h1>
                    <input type="email" placeholder='Your Email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <h1>Your Password</h1>
                    <input type='password' placeholder='Your Password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button onClick={() => handleSubmit()}>Login</button>
                </div>
            </div>
            <div className='banner__register'>
                <h1>New Customer?</h1>
                <p>Creating an account has many benefits:</p>
                <ul>
                    <li>Check out faster</li>
                    <li>Keep more than one address</li>
                    <li>Track orders and more</li>
                </ul>
                <button>
                Create An Account
                </button>
            </div>


        </div>
    )
}
export default Login