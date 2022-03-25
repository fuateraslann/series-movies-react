/* eslint-disable no-undef */
import React from 'react'
import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import HomePage from "../Pages/HomePage/HomePage"


it("renders correctly and contains correct titles", () => {
    render(<HomePage/>)
    expect(screen.getByText("Categories")).toBeInTheDocument()
    expect(screen.getByText("Movies")).toBeInTheDocument()
    expect(screen.getByText("Series")).toBeInTheDocument()
})