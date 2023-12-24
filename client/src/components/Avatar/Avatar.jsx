import React from 'react'

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const Avatar = ({children, backgroundColor, px, py, color, borderRadius, fontSize, cursor}) => {
    const style = {
        backgroundColor,
        padding: `${py} ${px}` ,
        color: color || 'black',
        borderRadius,
        fontSize,
        textAlign: "center",
        cursor: cursor,
        textDecoration: "none"
    }
    
    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Avatar