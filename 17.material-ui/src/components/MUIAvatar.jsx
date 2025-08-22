import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function MUIAvatar() {
    return (
        <div style={{ margin: '20px' }}>
            <Stack spacing={2}>
                <Avatar src='https://randomuser.me/api/portraits/men/52.jpg' sx={{ width: '100px', height: '100px' }} />

                <Avatar>E</Avatar>
                <Avatar sx={{ bgcolor: 'orange' }}>H</Avatar>
                <Avatar sx={{ bgcolor: 'purple', padding: '10px' }}>H</Avatar>

            </Stack>
        </div>
    )
}

export default MUIAvatar