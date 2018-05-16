const React = require("react");

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleKeyPress(event) {
    this.setState({ username: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { username } = this.state;
    this.props.getUserName(username);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.username}
            placeholder="Enter username"
            onChange={this.handleKeyPress}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

module.exports = Search;
