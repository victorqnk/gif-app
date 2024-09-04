import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('AddCategory component', () => {
  const value = 'Saitama'

  it('should change input value accordingly', () => {
    render(<AddCategory onNewCategory={() => {}} />)

    const input = screen.getByRole('textbox')
    fireEvent.input(input, { target: { value } })
    expect(input.value).toBe(value)
  })

  it('should call onNewCategory if input has a value', () => {
    const mockFn = jest.fn()
    render(<AddCategory onNewCategory={mockFn} />)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value } })
    expect(input.value).toBe(value)

    fireEvent.submit(form)
    expect(input.value).toBe('')
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith(value)
  })

  it('should not call onNewCategory if input is empty', () => {
    const mockFn = jest.fn()
    render(<AddCategory onNewCategory={mockFn} />)

    const form = screen.getByRole('form')
    fireEvent.submit(form)

    expect(mockFn).not.toHaveBeenCalled()
  })
})
