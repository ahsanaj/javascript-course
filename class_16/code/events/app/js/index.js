const React = require("react");
const ReactDOM = require("react-dom");
const App = require("./app.js");

// class HelloWord extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(this);
//     //debugger;
//     this.handleClick = this.handleClick.bind(this);
//     this.handleRightClick = this.handleRightClick.bind(this);
//     this.handleMouseOver = this.handleMouseOver.bind(this);
//     // Cache these copies - important point
//     // Create a copy of this.handleRightClick
//     // Don't run execute immediately
//     // When that copy is executed
//     // Make sure that the keyword 'this' referes to the instace
//     // We can refet to this.props. this.state etc
//   }
//   handleRightClick(event) {
//     event.preventDefault();
//     event.stopPropagation();
//     event.stopImmediatePropagation();
//     console.log("right click was clicked");
//   }
//   handleClick(event) {
//     event.preventDefault();
//     event.stopPropagation();
//     event.stopImmediatePropagation();
//     console.log(this.props.name);
//   }
//   handleMouseOver(event) {
//     console.log(`You moved your mouse over ${this.props.title}`);
//   }
//   render() {
//     console.log(this); // references an instance of HelloWorld
//     return (
//       <div>
//         <h1
//           onClick={this.handleClick}
//           onContextMenu={this.handleRightClick}
//           onMouseOver={this.handleMouseOver}
//         >
//           Hello {this.props.name}
//         </h1>
//       </div>
//     );
//   }
// }
// HelloWord.defaultProps = {
//   name: "hey",
//   title: "heading"
// };
// module.exports = HelloWord;

ReactDOM.render(<App />, document.querySelector("#app"));
