import React from 'react'
import SubTitle from '../Components/SubTitle'
import useFilms from '../Hook/UseFilms'
import FilmCard from '../Components/FilmCard'
export default function SeriesPage() {

  const {data ,error ,loading , setData} = useFilms("series")
  console.log(data , error , loading , setData)
  return (
    <div style = {{marginBottom :"50px" }}>
      <SubTitle subTitleHeader = "Series"/>
      {error ? "something went wrong" 
      :loading ? "Loading..."
      :<FilmCard data = {data}/> 
      }
    </div>
  )
}
