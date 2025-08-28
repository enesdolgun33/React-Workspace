import React, { useEffect, useState } from 'react'
import '../css/Navbar.css'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function Navbar() {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    useEffect(() => {

        const cikis = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log("Kullanıcı oturumu açık");
                setUser(currentUser);
            } else {
                console.log("Giriş yapılmamış");
                setUser(null);
            }
        })
        return () => cikis();
    }, [])


    const logout = async () => {
        toast.success("Çıkış yapılıyor");
        setTimeout(() => {
            signOut(auth);
            navigate("/auth");
        }, 3000)

    }

    return (
        <div className='navbar'>
            <div className='navbar-left'>FİREBASE</div>

            {user ? (
                <div onClick={logout} className='navbar-right'>Çıkış Yap</div>
            ) : (
                <div onClick={() => toast.error("Önce giriş yapınız")} className='navbar-right'>Çıkış Yap</div>
            )}


        </div>
    )
}

export default Navbar