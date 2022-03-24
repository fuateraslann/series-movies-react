/* eslint-disable react/prop-types */
import React from 'react'

export default function SubTitle({subTitleHeader}) {
    const style = {
        height : "18px", 
        backgroundColor :"#4dabf5",
        float : "top",
        textAlign : "center",
        fontWeight: "larger",
        color : "#fff",
        padding : "10px",
        marginBottom : "10px"
    }
    return (
        <div style = {style}>
                { subTitleHeader }
        </div>
    )
}
