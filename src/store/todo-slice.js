import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  'data': [],
}
export const todoSlice = createSlice({
  'name': 'todo',
  initialState,
  'reducers': {
    addTodo: (state, action) => {
      const generateId = Date.now()
      state.data.unshift(
        { 'id': generateId, 'name': action.payload, 'finished': false },
      )
    },
    deleteTodo: (state, action) => {
      state.data = state.data.filter((itemStatus) => {
        return itemStatus.id !== action.payload
      })
    },
    changeTodoStatus: (state, action) => {
      state.data = state.data.map((itemStatus) => {
        if (itemStatus.id === action.payload) {
          return { ...itemStatus, 'finished': !itemStatus.finished }
        }
        return { ...itemStatus }
      })
    },
  },
})

export const { deleteTodo } = todoSlice.actions
export const { addTodo, changeTodoStatus } = todoSlice.actions
export default todoSlice.reducer

export const deleteAsyncTodo = (amount) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(deleteTodo(amount))
    }, 1000)
  }
}
