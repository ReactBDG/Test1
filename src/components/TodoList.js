import { Component } from "react";
import { CompButton } from "./CompButton";
import InputElement from "./InputElement";
import { TodoItem } from "./TodoItem";
let a = 6;
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: [
        { whatToDo: "TO DO 1", isDone: false, id: 1, isEdit: false },
        { whatToDo: "TO DO 2", isDone: false, id: 2, isEdit: false },
        { whatToDo: "TO DO 3", isDone: false, id: 3, isEdit: false },
        { whatToDo: "TO DO 4", isDone: false, id: 4, isEdit: false },
        { whatToDo: "TO DO 5", isDone: false, id: 5, isEdit: false },
        { whatToDo: "TO DO 6", isDone: false, id: 6, isEdit: false },
      ],
    };
    // this.handleClick = this.handleClick.bind(this)
    this.deleteToDo = this.deleteToDo.bind(this);
  }

  handleAddParent = (newTodo) => {
    this.setState((prevState) => {
      return {
        toDos: [
          ...prevState.toDos,
          {
            whatToDo: newTodo,
            id: prevState.toDos[prevState.toDos.length - 1].id + 1,
          },
        ],
      };
    });
  };

  deleteToDo(id) {
    this.setState((_prevState) => ({
      ..._prevState,
      toDos: _prevState.toDos.filter((el) => el.id !== id),
    }));
  }

  doneUndeoneTodo = (id) => {
    this.setState((_prevState) => ({
      ..._prevState,
      toDos: _prevState.toDos.map((el) => {
        if (el.id === id) {
          return { ...el, isDone: !el.isDone };
        }
        return el;
      }),
    }));
  };

  handleEdit = (ev, id) => {
    this.setState((_prevState) => {
      return {
        ..._prevState,

        toDos: _prevState.toDos.map((el) => {
          if (el.id === id) {
            return { ...el, whatToDo: ev.target.value };
          }
          return el;
        }),
      };
    });
  };
  makeTodoEditOrSave = (id) => {
    this.setState((_prevState) => ({
      ..._prevState,
      toDos: _prevState.toDos.map((el) => {
        if (el.id === id) {
          return { ...el, isEdit: !el.isEdit };
        }
        return el;
      }),
    }));
  };

  render() {
    return (
      <div>
        <InputElement handleAddParent={this.handleAddParent} />

        <ul>
          {this.state.toDos.map((el) => (
            <TodoItem
              key={el.id}
              id={el.id}
              whatToDo={el.whatToDo}
              done={el.isDone}
              edit={el.isEdit}
              handleEdit={this.handleEdit}
              makeTodoEditOrSave={this.makeTodoEditOrSave}
              deleteToDo={this.deleteToDo}
              doneUndeoneTodo={this.doneUndeoneTodo}
            />
          ))}
        </ul>
      </div>
    );
  }
}
