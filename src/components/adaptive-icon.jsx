import PropTypes from 'prop-types'
import './adaptive-icon.scss'
const AdaptiveIcon = ({ bool }) => {
  return <i className={`adaptive-icon ${bool ? 'change-icon' : ''}`}></i>
}

export default AdaptiveIcon

AdaptiveIcon.propTypes = {
  'bool': PropTypes.bool,
}
