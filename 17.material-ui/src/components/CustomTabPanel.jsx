import React from 'react'

function CustomTabPanel(props) {
    const { value, index, children } = props;

    return (
        <div style={{ backgroundColor: 'gray', padding: '10px' }}>
            {value === index && <div>{children}</div>}
        </div>
    )
}

export default CustomTabPanel