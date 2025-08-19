import React from 'react'
import Grid from '@mui/material/Grid';

function MUIGrid() {
    return (
        // Responsive tasarım için çok önemli !!
        <div>
            <Grid container>
                <Grid size={{ xs: 12, sm: 6, md: 8, l: 9 }}>Item 1</Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4, l: 3 }}>Item 2</Grid>
            </Grid>
        </div>
    )
}

export default MUIGrid