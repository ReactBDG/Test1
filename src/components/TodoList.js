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
        { whatToDo: "TO DO 1", id: 1 },
        { whatToDo: "TO DO 2", id: 2 },
        { whatToDo: "TO DO 3", id: 3 },
        { whatToDo: "TO DO 4", id: 4 },
        { whatToDo: "TO DO 5", id: 5 },
        { whatToDo: "TO DO 6", id: 6 },
      ]
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
              deleteToDo={this.deleteToDo}
            />
          ))}
        </ul>
      </div>
    );
  }
}
