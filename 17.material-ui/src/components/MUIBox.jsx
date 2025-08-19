import React from 'react'
import Box from '@mui/material/Box';

function MUIBox() {
    return (
        <div>
            <Box sx={{ width: '200px', height: '200px', backgroundColor: 'green' }}>
            </Box>
            <br />

            <Box borderRadius={5} sx={{ width: '200px', height: '200px', backgroundColor: 'green' }}>
            </Box>
        </div>
    )
}

export default MUIBox