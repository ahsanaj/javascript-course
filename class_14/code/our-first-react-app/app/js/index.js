const React = require("react");
const ReactDOM = require("react-dom");

const hello = <h1> Hello World </h1>;
// converts to
// const hello = React.createElement("h1",{},"Hello World");

ReactDOM.render(hello, document.querySelector("#app"));

// Needs to be named with UpperCamelCase
// Needs a render method that has to return JSX
class HelloWorld extends React.Component {
  render() {
    return <h1>Test Heading</h1>;
  }
}

// Takes in the React Component and the output element
ReactDOM.render(<HelloWorld />, document.querySelector("#app"));

class Greeting extends React.Component {
  render() {
    return <h1>Welcome to our app</h1>;
  }
}

ReactDOM.render(<Greeting />, document.querySelector("#app"));

class HelloUser extends React.Component {
  render() {
    //debugger;
    console.log(this); // Represents an instance of HelloUser
    const name = this.props.name;
    const number = this.props.number;
    return (
      <h1>
        Hello...{name} and your favourite number is {number}
      </h1>
    );
  }
}
// automatically calls the render method of the class HelloUser
ReactDOM.render(
  <HelloUser name="Bill" number="42" />,
  document.querySelector("#app")
);
