import React from 'react'
//import MoviesCard from "../Components/MoviesCard"
import HomePageTiles from "../Components/HomePageTiles"
import SubTitle from '../Components/SubTitle'

export default function HomePage() {
  return (
      <div >
        <SubTitle subTitleHeader="Categories"/>
        <HomePageTiles/>
      </div>
  )
}
