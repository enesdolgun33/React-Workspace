import React, { useState } from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

function MUIAlert() {

    const [open, setOpen] = useState(true);

    return (
        <div style={{ margin: '20px' }}>
            <Stack>
                <Alert severity='success'>İşlem Başarılı</Alert>
                <br />
                <Alert severity='error'>İşlem Başarısız !</Alert>
                <br />
                <Alert severity='info'>Bilgilendirme mesajı</Alert>
                <br />
                <Alert severity='warning'>Dikkat et dostuuum</Alert>
            </Stack>
            <br /><br /><br />
            <Stack>
                <Alert variant='filled' severity='success'>
                    <AlertTitle>İşlem Başarılı</AlertTitle>
                    Bu işlem başarıyla gerçekleşmiştir
                </Alert>
                <br />
                <Alert variant='outlined' severity='error'>İşlem Başarısız !</Alert>
                <br />
                <Alert variant='standard' severity='info'>Bilgilendirme mesajı</Alert>
                <br />
                <Alert severity='success' color='warning'>Sembol farklı</Alert>
            </Stack>
            <br /><br />
            <Box sx={{ width: '100%' }}>
                <Collapse in={open}>
                    <Alert
                        action={
                            <IconButton
                                aria-label='close'
                                color='inherit'
                                size='small'
                                onClick={() => { setOpen(false); }
                                }>
                                <CloseIcon fontSize="inherit" />
                            </IconButton>}
                        sx={{ mb: 2 }}
                    >
                        Bu alert kapanabilir
                    </Alert>
                </Collapse>
                <Button
                    disabled={open}
                    variant='outlined'
                    onClick={() => { setOpen(true); }}
                >
                    Tekrar Aç
                </Button>
            </Box>

        </div>
    )
}

export default MUIAlert