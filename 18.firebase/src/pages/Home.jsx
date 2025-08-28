import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Firebase';
import '../css/Home.css'

function Home() {

    const [user, setUser] = useState('');

    const getUSerInfo = () => {
        onAuthStateChanged(auth, (userCredential) => {
            if (userCredential) {
                setUser(userCredential.email);
            }
        })

    }

    useEffect(() => {
        getUSerInfo();
    }, [])
    return (
        <div className='wellcome'>Merhaba {user}</div>
    )
}

export default Home