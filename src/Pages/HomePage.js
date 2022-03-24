import React from 'react'
//import MoviesCard from "../Components/MoviesCard"
import HomePageTiles from "../Components/HomePageTiles"
import SubTitle from '../Components/SubTitle'

export default function HomePage() {
  return (
      <div style ={{height :window.innerHeight*75/100}} >
        <SubTitle subTitleHeader="Categories"/>
        <HomePageTiles/>
      </div>
  )
}
