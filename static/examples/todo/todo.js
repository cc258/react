import React from "react";
import TodoList from "./todolist";

class Todo extends React.Component {
  // 初始化state (ES7) 或者在构造函数(constructor)中初始化state (ES6)
  state = {
    newTodo: ""
  };

  render = () => {
    const { list, changeStatus, getData } = this.props;
    return (
      <div>
        <h1 onClick={getData}>To do</h1>
        <div className="new">
          <input
            className="newInput"
            type="text"
            defaultValue=""
            onChange={this.setNewTodo}
          />
          <span onClick={this.handleTodo}>+</span>
        </div>
        <TodoList list={list} changeStatus={changeStatus} />
      </div>
    );
  };

  setNewTodo = e => {
    console.log(e.target.value);
    const d = e.target.value;
    this.setState({
      newTodo: d
    });
  };

  handleTodo = d => {
    const { newTodo } = this.state;
    const { list, addTodo } = this.props;
    addTodo(list, newTodo);
  };
}

export default Todo;
