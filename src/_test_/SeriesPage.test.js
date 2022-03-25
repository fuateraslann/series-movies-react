/* eslint-disable no-undef */
import React from 'react'
import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import SeriesPage from "../Pages/SeriesPage"


it("renders correctly and contains correct titles", () => {
    render(<SeriesPage/>)
    expect(screen.getByText("Series")).toBeInTheDocument()
})