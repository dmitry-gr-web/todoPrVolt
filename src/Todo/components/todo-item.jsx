import PropTypes from 'prop-types'
import BtnDelete from '../../components/btn-delete'
import { tooltipOff, tooltipOnEllipsis } from '../../helpers/tooltip'
import { debounce } from '../../helpers/debounce'
import AdaptiveIcon from '../../components/adaptive-icon'

const TodoItem = ({ id, name, finished, onClick, deleteItem }) => {
  const deleteSlow = debounce(deleteItem, 300)

  return (
    <div className='todo-body-stroke' key={id} onClick={() => onClick(id)}>
      <div>
        <AdaptiveIcon bool={finished} />
      </div>
      <div>
        <span
          onMouseEnter={(event) => {
            tooltipOnEllipsis(
              event.currentTarget,
              event.currentTarget.textContent,
              0,
              30,
            )
          }}
          onMouseLeave={tooltipOff}
        >
          {name}
        </span>
      </div>
      <div>
        <BtnDelete
          onClick={(event) => {
            event.stopPropagation()
            event.currentTarget
              .closest('.todo-body-stroke')
              .classList.add('deleting-stroke')
            tooltipOff()
            deleteSlow(id)
          }}
        />
      </div>
    </div>
  )
}

export default TodoItem

TodoItem.propTypes = {
  'id': PropTypes.number,
  'name': PropTypes.string,
  'finished': PropTypes.bool,
  'onClick': PropTypes.func,
  'deleteItem': PropTypes.func,
}
