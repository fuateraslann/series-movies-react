import React from 'react'
import {Route, Routes } from "react-router-dom";
import HomePage from '../Pages/HomePage';
import SeriesPage from '../Pages/SeriesPage';
import MoviesPage from '../Pages/MoviesPage';

export default function MainRouter() {
  return (
      <div>
        <Routes>
            <Route path="/" element = {<HomePage/>}/>
            <Route path="/home" element = {<HomePage/>} />
            <Route path="/series" element = {<SeriesPage/>} />
            <Route path="/movies" element = {<MoviesPage/>} />
        </Routes>
      </div>
   
  )
}
