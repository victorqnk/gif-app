import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {
  const [value, setValue] = useState('')

  const onChange = ({ target }) => setValue(target.value)

  const onSubmit = (event) => {
    event.preventDefault()
    if (value.trim().length <= 3) return
    onNewCategory(value.trim())
    setValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        placeholder='Search gif'
        type='text'
        value={value}
      />
      <button onClick={onSubmit}>add category</button>
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func,
}
