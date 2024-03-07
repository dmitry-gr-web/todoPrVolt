import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './dropdown.scss'
const Dropdown = ({ data = [], callBack, defaultValue }) => {
  const [resultType, setResultType] = useState(defaultValue)
  const [open, setOpen] = useState(false)
  const selectType = (typeFilter) => {
    setResultType(typeFilter)
    setOpen(false)
  }
  useEffect(() => {
    callBack?.(resultType)
  }, [resultType])

  return (
    <div
      className='dropdown'
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className='dropdown-result'>{resultType}</div>
      <div className={`dropdown-list  ${open ? 'active' : ''}`}>
        {data.map((type, index) => (
          <div
            key={index}
            className='dropdown-item'
            onClick={() => selectType(type)}
          >
            {type}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dropdown

Dropdown.propTypes = {
  'data': PropTypes.array,
  'callBack': PropTypes.func,
  'defaultValue': PropTypes.string,
}
