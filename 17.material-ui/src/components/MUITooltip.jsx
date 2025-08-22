import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function MUITooltip() {
    return (
        <div>
            <div style={{ marginTop: '100px', textAlign: 'center' }}>
                <Tooltip title="SİLMEK İÇİN TIKLA DOSTUMM" placement='top'>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </div>

            <div style={{ marginTop: '100px', textAlign: 'center' }}>
                <Tooltip title="SİLMEK İÇİN TIKLA DOSTUMM" placement='left'>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    )
}

export default MUITooltip