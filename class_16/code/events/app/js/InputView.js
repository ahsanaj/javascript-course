const React = require("react");
const ReactDOM = require("react-dom");

class InputView extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      todo: ""
    };
  }
  handleKeyPress(event) {
    this.setState({
      todo: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    event.target.querySelector("input[type='text'").focus();
    const { todo } = this.state;
    //console.log(todo);
    this.setState({ todo: "" });
    if (todo !== "") {
      this.props.addTodo(todo);
    }

    //this.state.todos.push(item);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.todo}
            placeholder="Enter todo item"
            onChange={this.handleKeyPress}
          />
          <input type="submit" value="Add Todo" />
        </form>
      </div>
    );
  }
}

module.exports = InputView;
