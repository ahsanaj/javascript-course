const React = require("react");

class AllTodosView extends React.Component {
  render() {
    const mappedTodos = this.props.todos.map((todo, i) => {
      return <li key={i}>{todo}</li>;
    });
    return (
      <div>
        <h2>Todo List</h2>
        <ul>{mappedTodos}</ul>
      </div>
    );
  }
}

module.exports = AllTodosView;
