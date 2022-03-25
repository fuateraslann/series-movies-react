/* eslint-disable no-undef */
import React from 'react'
import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import MoviesPage from "../Pages/MoviesPage"


it("renders correctly and contains correct titles", () => {
    render(<MoviesPage/>)
    expect(screen.getByText("Movies")).toBeInTheDocument()
})