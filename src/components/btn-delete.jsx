import PropTypes from 'prop-types'
import { tooltipOn, tooltipOff } from '../helpers/tooltip'
import './btn-delete.scss'

const BtnDelete = ({ onClick, style }) => {
  return (
    <button
      style={{ ...style }}
      onMouseEnter={(event) => {
        tooltipOn(event.currentTarget, 'Delete task', 0, 30)
      }}
      onMouseLeave={tooltipOff}
      onClick={onClick}
      className='btn-delete'
    ></button>
  )
}

export default BtnDelete

BtnDelete.propTypes = {
  'onClick': PropTypes.func,
  'style': PropTypes.object,
}
