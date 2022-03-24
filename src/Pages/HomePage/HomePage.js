import React from 'react'
//import MoviesCard from "../Components/MoviesCard"
import SubTitle from '../../Components/SubTitle'
import Tile from '../../Components/Tile'
import "./HomePage.css"

export default function HomePage() {
  const figureStyle = {
    display : "flex " , flexDirection : "row" , margin: "5px",textAlign : "center"
  }
  return (
      <div style ={{height :window.innerHeight*75/100}} >
        <SubTitle subTitleHeader="Categories"/>
        <div style = {figureStyle}>
          <Tile href = {"movies"} text = {"Movies"} imgSrc = {"https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG"}/>
          <Tile href = {"series"} text = {"Series"} imgSrc = {"https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image2.PNG"}/>
        </div>
      </div>
  )
}
