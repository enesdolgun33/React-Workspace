import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';

function MUICheckbox() {

    const [isConfirm, setIsconfirm] = useState(false);
    console.log(isConfirm)

    const submit = () => {
        if (!isConfirm) {
            alert("Sözleşmeyi onaylayınız")
        } else {
            alert("Başarıyla gönderildi")
        }
    }
    return (
        <div> <br />
            <FormControl component="fieldset">
                <FormLabel>Eğitim Durumu</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox disabled />} //üzerinde oynama yapılmaması ıcın
                        label="İlkokul"
                        labelPlacement='end'
                    />
                    <FormControlLabel
                        control={<Checkbox defaultChecked />} // default olarak bu secenegı secılı olarak verir
                        label="Ortaokul"
                        labelPlacement='end'
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Lise"
                        labelPlacement='end'
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Üniversite"
                        labelPlacement='end'
                    />
                </FormGroup>
            </FormControl>

            <hr /> <br />

            <FormControl component="fieldset">
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={isConfirm} onChange={(e) => setIsconfirm(e.target.checked)} />}
                        label="Kullanım koşullarını kabul ediyorum."
                        labelPlacement='end'
                    />
                    <Button onClick={submit} variant='contained'>Formu Gönder</Button>
                </FormGroup>
            </FormControl>
            <br /><br /></div>
    )
}

export default MUICheckbox