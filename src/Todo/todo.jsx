import { useState, useRef } from 'react'
import { tooltipOn, tooltipOff, tooltipAlert } from '../helpers/tooltip'
import TodoItem from './components/todo-item'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, changeTodoStatus, deleteAsyncTodo } from '../store/todo-slice'
import TaskInput from './components/task-input'
import Dropdown from '../components/dropdown'
import './todo.scss'

const ToDo = () => {
  const [filterType, setFilterType] = useState('All')
  const data = useSelector((state) => state.todo.data)
  const inputValue = useRef('')
  const todoBodyBlock = useRef()
  const dispatch = useDispatch()

  const addNewTask = () => {
    if (inputValue.current.length < 3 || inputValue.current.length >= 30) {
      tooltipAlert(
        document.querySelector('.todo-task-name'),
        'Enter at least 3 characters and greater than or equal to 30',
        10,
        30,
      )
      return
    }
    dispatch(addTodo(inputValue.current))
    todoBodyBlock.current
      .querySelector('.todo-body-stroke:first-child')
      ?.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }
  const changeTaskName = (value) => (inputValue.current = value)
  const acceptTaskName = (event) => {
    if (event.key === 'Enter') addNewTask()
  }
  const changeStatus = (id) => dispatch(changeTodoStatus(id))
  const deleteTask = (id) => dispatch(deleteAsyncTodo(id))
  const filterTodo = (typeFilter) => setFilterType(typeFilter)

  return (
    <div className='todo-block'>
      <div className='todo-head'>
        <div className='first-column'>
          <Dropdown
            data={['All', 'Finished', 'Not finished']}
            callBack={filterTodo}
            dataChange={data}
            defaultValue={filterType}
          />
        </div>
        <div className='todo-task-name second-column'>
          <TaskInput
            onPressEnter={acceptTaskName}
            changeTaskName={changeTaskName}
            dataChange={data}
          />
          <button
            className='add-task'
            onMouseEnter={(event) => {
              tooltipOn(event.currentTarget, 'Add new task', 0, 30)
            }}
            onMouseLeave={tooltipOff}
            onClick={addNewTask}
          ></button>
        </div>
        <div
          className='third-column'
          onMouseEnter={(event) => {
            const [firstNum, secondNum] =
              event.currentTarget.textContent.split('/')
            tooltipOn(
              event.currentTarget,
              `Completed tasks: 
                  ${firstNum}<br>Uncompleted tasks: ${secondNum}`,
              10,
              30,
            )
          }}
          onMouseLeave={tooltipOff}
        >
          {data.filter((itemStatus) => itemStatus.finished).length}/
          {data.filter((itemStatus) => !itemStatus.finished).length}
        </div>
      </div>
      <div className='todo-body' ref={todoBodyBlock}>
        {data
          .filter((todoitem) => {
            if (filterType === 'All') {
              return { ...todoitem }
            }
            const type = filterType === 'Finished'
            return todoitem.finished === type
          })
          .map((todoProps) => (
            <TodoItem
              key={todoProps.id}
              {...todoProps}
              onClick={changeStatus}
              deleteItem={deleteTask}
            />
          ))}
      </div>
      {data.length > 0 && <div className='todo-foot-shadow'></div>}
    </div>
  )
}
export default ToDo
