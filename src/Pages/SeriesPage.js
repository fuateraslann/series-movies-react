import React from 'react'
import SubTitle from '../Components/SubTitle'
import useFilms from '../Hook/UseFilms'
import FilmCard from '../Components/FilmCard'
export default function SeriesPage() {

  const {data ,error ,loading } = useFilms("series")
  return (
    <div >
      <SubTitle subTitleHeader = "Series"/>
      {error ? "something went wrong" 
      :loading ? "Loading..."
      :<FilmCard data = {data}/> 
      }
    </div>
  )
}
