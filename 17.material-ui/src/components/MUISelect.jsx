import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

function MUISelect() {

    const [currency, setCurrency] = useState('');
    console.log(currency)

    const [currency2, setCurrency2] = useState([]); // birden fazla secenek sectıgımız ıcın array olarak tanımlamamız gerekir
    console.log(currency2)
    return (
        <div>
            {/* <div style={{ marginBottom: '40px' }}>
                <FormControl sx={{ width: '150px' }} >
                    <InputLabel>Para Birimi</InputLabel>
                    <Select value={currency} onChange={(e) => setCurrency(e.target.value)} variant='standard'>
                        <MenuItem value="TRY">Türk Lirası</MenuItem>
                        <MenuItem value="USD">Dolar</MenuItem>
                        <MenuItem value="EUR">Euro</MenuItem>
                    </Select>
                </FormControl>
            </div> */}

            <div style={{ marginBottom: '40px' }}>
                <TextField
                    SelectProps={{ multiple: true }} //birden fazla secenek secilebilir 
                    value={currency2}
                    onChange={(e) => setCurrency2(e.target.value)}
                    sx={{ width: '250px' }}
                    label="Para birimi"
                    select>
                    <MenuItem value="TRY">Türk Lirası</MenuItem>
                    <MenuItem value="USD">Dolar</MenuItem>
                    <MenuItem value="EUR">Euro</MenuItem>
                </TextField>
            </div>
        </div>
    )
}

export default MUISelect