import React from 'react'
import "./Styles/HomePageTiles.css"

export default function HomePageTiles() {

  const fontStyle = {
    color : "#1976d2",
    fontWeight : "bold",
  }
  return (
    <div className='container'>
        <div className="column is-one-quarter" style = {{display : "flex " , flexDirection : "row" , margin: "5px"}}>
          <figure>
            <figcaption style = {fontStyle}>Movies</figcaption>
            <a href = "movies">
              <img alt = "asd" src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG"/>
            </a>
          </figure>
          <figure>
            <figcaption style = {fontStyle}>Series</figcaption>
            <a href = "series">
              <img  src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image2.PNG"/>
            </a> 
          </figure>
        </div>
    </div>
  )
}
