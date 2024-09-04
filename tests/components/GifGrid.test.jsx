import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('GifGrid component', () => {
  const category = 'One Punch'

  it('should show loading state', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    })

    render(<GifGrid category={category} />)
    expect(screen.getByText('LOADING...'))
    expect(screen.getByText(category))
  })

  it('should show items when images are loaded', () => {
    const images = [
      {
        id: 1,
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg',
      },
      {
        id: 2,
        title: 'Goku',
        url: 'https://localhost/goku.jpg',
      },
    ]

    useFetchGifs.mockReturnValue({
      images,
      isLoading: false,
    })

    render(<GifGrid category={category} />)
    expect(screen.getAllByRole('img').length).toBe(2)
  })
})
