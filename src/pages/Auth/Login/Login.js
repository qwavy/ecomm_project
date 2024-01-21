import { useEffect, useState } from 'react'
import './Login.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import products_store from '../../../store/products_store';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [users,setUsers] = useState([])

    useEffect(() => {
        fetch('/auth/login')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((e) => console.log(e))
    },[])



    const notify = (data) => {
        if(data === "No such user was found"){
            return toast.error('No such user was found!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        if(data === "incorrect password"){
            return toast.error('incorrect password', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        toast.success(' Success!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        products_store.isLogin = true
        if(email == "admin"){
            products_store.isAdmin = true
        }

    }

    const handleSubmit = () => {
        // const apiUrl = '/auth/login';

        // // Замените данные в body на те, которые вы хотите отправить на сервер
        // const postData = {
        //     email: email,
        //     password: password,
        // };

        // fetch(apiUrl, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         // Дополнительные заголовки, если необходимо
        //     },
        //     body: JSON.stringify(postData),
        // })
        //     .then(response => {
        //         if (!response.ok) {
        //             // throw new Error(`Network response was not ok: ${response.statusText}`);
        //         }
        //         return response.json();
        //     })
        //     .then(data => {
        //         console.log('Data received:', data);
        //         notify(data.message)
        //     })
        //     .catch(error => {
        //         console.error('There was a problem with the fetch operation:', error);
        //     });


        users.forEach((user) => {
            if(user.includes(email)){
                if(user.password == password){
                    return notify()
                }
                return notify("incorrect password")
            }
            return notify("No such user was found")
        })

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
                <button onClick={() => handleSubmit()} style={{marginTop:"40px",width:"200px"}}>Login</button>
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
            <Link to='/register'>
            <button style={{color:"white"}}>
                
                Create An Account
            </button>
            </Link>
        </div>
        <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

    </div>
    )
}
export default Login