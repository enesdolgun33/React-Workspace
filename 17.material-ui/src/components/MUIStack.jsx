import { Divider, Stack } from '@mui/material'
import React from 'react'

function MUIStack() {
    return (
        <div>
            <Stack direction={"row"} spacing={5} divider={<Divider orientation='vertical' flexItem />}>
                <div>İtem 1</div>
                <div>İtem 2</div>
                <div>İtem 3</div>
            </Stack>
            <br /> <br /><br /><br />
            <Stack direction={"column"} spacing={1} divider={<Divider orientation='horizontal' flexItem />}>
                <div>İtem 1</div>
                <div>İtem 2</div>
                <div>İtem 3</div>
            </Stack>
            <br /><br /> <br /><br />
            {/*               burada farklı çözünürlüklerde nasıl davranacağını belirleriz */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} divider={<Divider orientation='horizontal' flexItem />}>
                <div>İtem 1</div>
                <div>İtem 2</div>
                <div>İtem 3</div>
            </Stack>

        </div>
    )
}

export default MUIStack