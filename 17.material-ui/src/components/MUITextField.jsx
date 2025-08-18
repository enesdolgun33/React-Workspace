import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function MUITextField() {
    return (
        <div>
            <div style={{ marginBottom: '30px' }}>
                <TextField label="isim" variant='outlined' />
                <TextField label="isim" variant='filled' />
                <TextField label="isim" variant='standard' />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <TextField label="isim" variant='outlined' color='error' />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <TextField label="isim" variant='outlined' color='error' helperText="İsminizi giriniz" />
                <TextField label="Şifre" variant='outlined' color='error' helperText="Şifrenizi kimseyle paylaşmayın" />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <TextField label="Kimlik No" disabled variant='outlined' color='warning' />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <TextField InputProps={{ readOnly: true }} value="Enes" disabled variant='outlined' color='warning' />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <TextField
                    label="Kullanıcı adınızı giriniz"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <AccountCircleIcon />
                                </InputAdornment>
                            )
                        }
                    }}
                    variant='outlined' />

                <TextField
                    label="İstediğiniz miktarı giriniz"
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position='end'>
                                    KG
                                </InputAdornment>
                            )
                        }
                    }}
                    variant='outlined' />
            </div>
            <div style={{ marginBottom: '30px' }}>
                <TextField label="İsim giriniz" variant='outlined' size='small' />
                <TextField label="İsim giriniz" variant='outlined' size='medium' />
            </div>
        </div>
    )
}

export default MUITextField