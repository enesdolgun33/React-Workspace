import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

function MUIDrawer() {

    const [isOpenRight, setIsOpenRight] = useState(false);
    const [isOpenTop, setIsOpenTop] = useState(false);

    return (
        <div>
            <Button onClick={() => setIsOpenRight(true)}>Sağda Aç</Button>
            <Drawer open={isOpenRight} onClose={() => setIsOpenRight(false)} anchor='right' >

                <Box sx={{ width: '400px' }}>
                    <h1>Başlık</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Box>
            </Drawer>
            <br /><br />
            <Button onClick={() => setIsOpenTop(true)}>Üstte Aç</Button>
            <Drawer open={isOpenTop} onClose={() => setIsOpenTop(false)} anchor='top' >

                <Box sx={{ width: '400px' }}>
                    <h1>Başlık</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Box>
            </Drawer>
        </div>
    )
}

export default MUIDrawer