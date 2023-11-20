import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
  it('Renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Glycemic Load Calculator/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
