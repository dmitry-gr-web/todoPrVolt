import { useState, useEffect } from 'react'
import { focusInput } from '../../helpers/input-events'
import PropTypes from 'prop-types'
const TaskInput = ({ changeTaskName, onPressEnter, dataChange }) => {
  const [taskName, setTaskName] = useState('')
  useEffect(() => {
    changeTaskName(taskName)
  }, [taskName])
  useEffect(() => {
    setTaskName('')
  }, [dataChange])
  return (
    <input
      value={taskName}
      onMouseEnter={focusInput}
      onKeyDown={onPressEnter}
      onChange={(event) => changeTaskName(setTaskName(event.target.value))}
    />
  )
}

export default TaskInput

TaskInput.propTypes = {
  'changeTaskName': PropTypes.func,
  'onPressEnter': PropTypes.func,
  'dataChange': PropTypes.array,
}
