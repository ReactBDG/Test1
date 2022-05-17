import React, { memo } from "react";

export const TodoItem = memo(
  ({ whatToDo, deleteToDo, id, done, doneUndeoneTodo, edit, handleEdit, makeTodoEditOrSave }) => {
    return (
      <li className={done ? "done" : "undone"}>
        {edit ? <input value={whatToDo} type='text' onChange={(ev) => handleEdit(ev, id)} /> : whatToDo}
        <button onClick={() => deleteToDo(id)}>X</button>
        <button onClick={() => doneUndeoneTodo(id)} >{!done ? "done" : "undone"}</button>
        <button onClick={() => makeTodoEditOrSave(id)}  >{!edit ? 'edit' : 'save'}</button>
      </li>
    );
  }
);
