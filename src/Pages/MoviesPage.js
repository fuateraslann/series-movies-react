import React from 'react'
import SubTitle from '../Components/SubTitle'
import useFilms from '../Hook/UseFilms'
import FilmCard from '../Components/FilmCard'
export default function MoviesPage() {

  const {data ,error ,loading } = useFilms("movie")
  return (
    <div >
      <SubTitle subTitleHeader = "Movies"/>
      {error ? "something went wrong" 
      :loading ? "Loading..."
      :<FilmCard data = {data}/> 
      }
    </div>
  )
}
