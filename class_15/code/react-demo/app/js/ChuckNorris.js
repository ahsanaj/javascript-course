const React = require("react");

class ChuckNorris extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      data: null
    };
    const baseURL = "http://api.icndb.com/jokes/random?limitTo=%5Bnerdy%5D";
    const httpOptions = {
      method: "GET"
    };
    setInterval(
      function() {
        fetch(baseURL, httpOptions)
          .then(response => response.json())
          .then(
            function(data) {
              this.setState({ data: data.value.joke });
            }.bind(this)
          )
          .catch(
            function(error) {
              this.setState({ hasError: true });
            }.bind(this)
          );
      }.bind(this),
      5000
    );
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
          <h2>{this.state.data}</h2>
        </div>
      );
    }
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
}

module.exports = ChuckNorris;
