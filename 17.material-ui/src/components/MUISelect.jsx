import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function MUISelect() {
    return (
        <div>
            <div style={{ marginBottom: '40px' }}>
                <FormControl>
                    <InputLabel>Para Birimi</InputLabel>
                    <Select >
                        <MenuItem value="TRY">Türk Lirası</MenuItem>
                        <MenuItem value="USD">Dolar</MenuItem>
                        <MenuItem value="EUR">Euro</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default MUISelect