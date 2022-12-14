import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import './Login.css';

const Login = () => {
    const [error, setError] = useState('');
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const navigate = useNavigate();
    useTitle('Login');

    const { providerLogin, signIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error));
    }
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })

    }
    return (
        <div className="login hero min-h-screen bg-base-200 ">
            <div className="hero-content w-3/4 mx-auto flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-orange-400 font-bold">Login now!</h1>
                    <p className="py-6 text-slate-100 shadow-lg">Give your nails a sweet treat. Your nails deserves better.</p>
                    <p className='text-white'>Don't have account with us? <Link className='text-rose-400' to='/signup' >Sign up</Link ></p>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary mt-5">Sign In with Google</button>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <Link to='#' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;