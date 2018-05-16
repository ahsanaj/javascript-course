const React = require("react");
const Search = require("./Search.js");
const UserProfiles = require("./UserProfile.js");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
      repositories: null
    };
    this.getUserName = this.getUserName.bind(this);
  }
  getUserName(username) {
    console.log(this);
    console.log(username);
  }
  getUserProfiles(username) {}
  render() {
    return (
      <div>
        <h1>Our Github App</h1>
        <Search getUserName={this.getUserName} />
      </div>
    );
  }
}

module.exports = App;
