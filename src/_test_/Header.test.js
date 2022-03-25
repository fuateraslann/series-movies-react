/* eslint-disable no-undef */
import React from 'react'
import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import Header from "../Components/Header/Header"


it("renders correctly and contains correct titles", () => {
    render(<Header/>)
    expect(screen.getByText("BestMovi")).toBeInTheDocument()
    expect(screen.getByText("Login")).toBeInTheDocument()
})