import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
function MUIDialog() {

    const [dialogOpen, setDialogOpen] = useState(false)

    const type = {
        YES: "YES",
        NO: "NO"
    }

    const result = (typeParam) => {
        console.log("Kullanıcı sonucu: ", typeParam)
        if (typeParam == type.YES) {
            console.log("Evet incelemiş")
        }
        else {
            console.log("İncelememiş yazıklar olsun")
        }
        setDialogOpen(false);
    }

    return (

        <div style={{ textAlign: 'center' }}>
            <Button onClick={() => setDialogOpen(true)}>Diolog</Button>
            <Dialog open={dialogOpen} >
                <DialogTitle>Soru</DialogTitle>
                <DialogContent>
                    <DialogContentText>GitHub profilimi incelediniz mi?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => result(type.YES)}>Evet :D</Button>
                    <Button onClick={() => result(type.NO)}>Hayir :/</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default MUIDialog