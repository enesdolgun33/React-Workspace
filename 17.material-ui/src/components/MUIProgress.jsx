import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function MUIProgress() {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }

                const plusValue = Math.floor(Math.random() * 10)
                return Math.min(oldProgress + plusValue, 100);

            })
        }, 500)

        return () => {
            clearInterval(timer);
        };
    }, [])

    return (
        <div>
            Circular indeterminate <br /><br />
            <CircularProgress />
            <br /><br />
            <CircularProgress color='success' />
            <br /><br />
            <LinearProgress />
            <br /><br />
            <LinearProgress variant='query' color='secondary' />
            <br /><br />
            <LinearProgress variant='determinate' value={55} />
            <br /><br />
            Linear determinate
            <LinearProgress variant='determinate' value={progress} />
        </div>
    )
}

export default MUIProgress