import React from 'react'
import {render, screen} from '@testing-library/react'
import LoginPage from './Login.page'

describe('LoginPage', () => {
    test('should display a  title', () => {
        render(<LoginPage/>)

        const titleElement = screen.queryByText(/Please login!/i)

        expect(titleElement).toBeInTheDocument()
    })

    test("there are username and password inputs", () => {
        render(<LoginPage/>)

        const userNameInputElement = screen.queryByLabelText(/username/i)
        const passwordInputElement = screen.queryByLabelText(/password/i)

        expect(userNameInputElement).toBeInTheDocument()
        expect(passwordInputElement).toBeInTheDocument()
    })
})