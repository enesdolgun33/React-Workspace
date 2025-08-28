import React from 'react';
import '../css/Auth.css';

function Auth() {
    return (
        <div className='auth'>
            <h3 className='auth-header'>Giriş Yap / Kaydol</h3>
            <div className='input-div'>
                <input className='inputs' type="text" placeholder='Email adresi giriniz' />
                <input className='inputs' type="password" placeholder='Şifre' />
            </div>
            <div>
                <button className='signup-button'>Giriş Yap</button>
                <button className='register-button'>Kaydol</button>
            </div>
        </div>
    )
}

export default Auth