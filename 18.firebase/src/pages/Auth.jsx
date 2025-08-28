import React, { useState } from 'react';
import '../css/Auth.css';
import { FaGoogle } from "react-icons/fa";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';

function Auth() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            const user = response.user;
            if (user) {
                navigate("/");
            }
        } catch (error) {
            toast.error("Giriş yapılamadı " + error.message)
        }
    }

    const register = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            const user = response.user;
            if (user) {
                toast.success("Kullanıcı oluşturuldu");
                setEmail('');
                setPassword('');
            }
        } catch (error) {
            toast.error(error.message)
        }
    }



    return (
        <div className='auth'>
            <h3 className='auth-header'>Giriş Yap / Kaydol</h3>
            <div className='input-div'>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className='inputs' type="text" placeholder='Email adresi giriniz' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} className='inputs' type="password" placeholder='Şifre' />
            </div>
            <div className='buttons'>
                <button className='google-button'><FaGoogle style={{ padding: 0, margin: '0px 8px 0px 0px' }} />
                    Google ile Giriş Yap</button>
                <button onClick={login} className='signup-button'>Giriş Yap</button>
                <button onClick={register} className='register-button'>Kaydol</button>
            </div>
        </div>
    )
}

export default Auth