import React, { useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Golf from '../assets/Golf.jpg'

function MUISkeleton() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [])

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <Stack spacing={1}>
                <Skeleton variant='text' sx={{ fontSize: '1rem' }} width={210} />
                <Skeleton variant='circular' width={40} height={40} />
                <Skeleton variant='rectangular' width={210} height={60} />
                <Skeleton variant='rounded' width={210} height={60} />
            </Stack>

            <br /><br /><br />Resim 3 saniye içinde yüklenir<br />
            {
                loading ? <Skeleton variant='rounded' width={250} height={150} animation='wave' /> : <img src={Golf} width={250} height={150} />
            }

        </div>
    )
}

export default MUISkeleton