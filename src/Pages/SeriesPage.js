import React from 'react'
import SubTitle from '../Components/SubTitle'
import useFilms from '../Hook/UseFilms'
export default function SeriesPage() {
  const movies = useFilms("series")
  console.log(movies)
  return (
    <SubTitle subTitleHeader="Series"/>
  )
}
