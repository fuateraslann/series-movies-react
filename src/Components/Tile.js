/* eslint-disable react/prop-types */
import React from 'react'

export default function Tile({href,text , imgSrc}) {

    const fontStyle = {
        color : "#1976d2",
        fontWeight : "bold",
    }
    return (
        <figure>
            <figcaption style = {fontStyle}>{text}</figcaption>
            <a href = {href}>
                <img src={imgSrc}/>
            </a>
        </figure>
    )
}
