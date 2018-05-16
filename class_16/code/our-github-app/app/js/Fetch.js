const React = require("react");

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
      repositories: null
    };
    this.getUserProfile = this.getUserProfile.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Our Github App</h1>
        <Search />
      </div>
    );
  }
}

module.exports = Fetch;
