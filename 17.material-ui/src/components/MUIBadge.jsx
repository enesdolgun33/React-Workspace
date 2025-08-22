import React from 'react'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

function MUIBadge() {
    return (
        <div style={{ margin: '30px' }}>
            <Badge badgeContent={14} color="error" max={99} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}> {/*yönünü ayarlayabiliriz*/}
                <MailIcon color="action" />
            </Badge>
        </div>
    )
}

export default MUIBadge