import React from 'react'
import SubTitle from '../Components/SubTitle'
import useFilms from '../Hook/UseFilms'

export default function MoviesPage() {

  const movies = useFilms("movie")
  console.log(movies)
  return (
    <div>
      <SubTitle subTitleHeader = "Movies"/>
    </div>
  )
}
