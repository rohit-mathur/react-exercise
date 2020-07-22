import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


describe('Testing App Component', () => {
  beforeEach(()=>{
    render(<BrowserRouter>
      <App />
    </BrowserRouter>)
  })
  it('Should render container', () => {
    const element = screen.getByTestId("container")
    expect(element).toBeInTheDocument()
  })
})
