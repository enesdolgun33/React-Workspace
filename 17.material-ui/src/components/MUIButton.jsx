import { Button } from '@mui/material'
import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function MUIButton() {
    return (
        <div>
            <div style={{ marginBottom: '50px' }}>
                <Button variant='text'>Kaydol</Button>
                <Button variant='contained'>Kaydol</Button>
                <Button variant='outlined'>Kaydol</Button>
            </div>
            <div style={{ marginBottom: '50px' }}>
                <Button color='primary'>Giriş yap</Button>
                <Button color='error'>Giriş yap</Button>
                <Button color='info'>Giriş yap</Button>
                <Button color='secondary'>Giriş yap</Button>
                <Button color='success' variant='contained'>Giriş yap</Button>
            </div>
            <div style={{ marginBottom: '50px' }}>
                <Button size='small' variant='contained' color='warning'>Geri Dön</Button>
                <Button size='medium' variant='contained' color='warning'>Geri Dön</Button>
                <Button size='large' variant='contained' color='warning'>Geri Dön</Button>
            </div>
            <div style={{ marginBottom: '50px' }}>
                <Button size='small'
                    variant='contained'
                    color='warning'
                    startIcon={<AddCircleOutlineIcon />}
                >Geri Dön</Button>

                <Button size='small'
                    onClick={() => alert("buton çalıştı")}
                    variant='contained'
                    color='warning'
                    endIcon={<AddCircleOutlineIcon />}
                >Geri Dön</Button>
            </div>
        </div>
    )
}

export default MUIButton