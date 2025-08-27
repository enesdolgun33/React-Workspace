import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function MUISnackbar() {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const action = (
        <>
            <Button size='small' color='info' onClick={handleClose}>Kapat</Button>
            <IconButton sx={{ color: 'white' }} onClick={handleClose}>
                <CloseIcon />
            </IconButton>
        </>
    )

    return (
        <div>
            <Button onClick={handleClick}>Snackbarı aç</Button>
            <Snackbar
                open={open}
                message="5 Saniye sonra kapanacaktır"
                action={action}
                autoHideDuration={5000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} //konumu burdan ayaralanabılır
            />
        </div>
    )
}

export default MUISnackbar