import React, {memo} from 'react';

export const TodoItem = memo(({whatToDo, deleteToDo, id}) => {
  return (
    <li>{whatToDo}<button onClick={() => deleteToDo(id)}>X</button></li>
  )
})
