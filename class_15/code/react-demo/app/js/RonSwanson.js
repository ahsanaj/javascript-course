const React = require("react");

class RonSwanson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      data: null
    };
    const baseURL = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
    const httpOptions = {
      method: "GET"
    };

    fetch(baseURL, httpOptions)
      .then(response => response.json())
      .then(
        function(data) {
          this.setState({ data: data[0] });
        }.bind(this)
      )
      .catch(function(error) {});
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong</h1>
        </div>
      );
    } else if (this.state.data) {
      return (
        <div>
          <h1>Loaded Successfully</h1>
          <p>{this.state.data}</p>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

module.exports = RonSwanson;
