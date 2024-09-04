import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('GifItem component', () => {
  const title = 'Saitama'
  const url = 'https://one-punch.com/saitama.jpg'

  it('should match the snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />)
    expect(container).toMatchSnapshot()
  })

  it('should show correct image with alt text', () => {
    render(<GifItem title={title} url={url} />)
    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  it("should show component's title", () => {
    render(<GifItem title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy()
  })
})
