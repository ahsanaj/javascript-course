const React = require("react");

const ReactDOM = require("react-dom");

const RonSwanson = require("./RonSwanson.js");

const ChuckNorris = require("./ChuckNorris.js");

class HelloWorld extends React.Component {
  // Constructor method (you'll need to call super here)
  // Can receive props
  // Can manage state
  // Can event listeners
  // Must have a render method
  // That render method must return JSX (React elements)
  render() {
    return <h1>Hello World</h1>;
  }
}

class MyComputer extends React.Component {
  render() {
    return <p>Is a MAC</p>;
  }
}

class HelloUser extends React.Component {
  render() {
    const { name, favNumber } = this.props;
    // must only return one parent html element
    return (
      <div>
        <p>Hello {name}</p>
        <p>your favourite number is {favNumber}</p>
      </div>
    );
  }
}

// StudentDetails
class StudentDetails extends React.Component {
  render() {
    return (
      <li>
        {this.props.name} works at {this.props.workPlace}
      </li>
    );
  }
}
// CurrentClass
// Use StudentDetails
class CurrentClass extends React.Component {
  render() {
    const studentDetails = [
      { name: "Jack", workPlace: "GA" },
      { name: "AJ", workPlace: "Carroll & O'Dea Lawyers" },
      { name: "Rach", workPlace: "Ansarada" },
      { name: "Serene", workPlace: "Auto Pilot" },
      { name: "Layth", workPlace: "IGN" },
      { name: "Ben", workPlace: "Cancer Council" }
    ];
    const studentMarkup = studentDetails.map(student => {
      return (
        <StudentDetails name={student.name} workPlace={student.workPlace} />
      );
    });
    return (
      <div>
        <h1>Welcome to JavaScript Course at GA</h1>
        <h2>The students enrolled are</h2>
        <ul>{studentMarkup}</ul>
      </div>
    );
  }
}

//MovieApp

class MovieDetails extends React.Component {
  render() {
    const { movieName } = this.props;
    return <li>Movie Name: {movieName}</li>;
  }
}

class MovieApp extends React.Component {
  render() {
    const movies = [
      "Three idios",
      "Saw",
      "Terminator",
      "Jaws",
      "22 Jump Street"
    ];
    const movieComponents = movies.map(movie => {
      return <MovieDetails movieName={movie} />;
    }); // Returns and array of react elements
    console.log(movieComponents);
    return (
      <div>
        <h1>Welcome to our Movie App</h1>
        <ul>{movieComponents}</ul>
        <h6>Copyright No one</h6>
      </div>
    );
  }
}

class CurrentTime extends React.Component {
  constructor(props) {
    super(props); // Inherit functionality from React.Component
    this.state = {
      date: new Date()
    }; // Set initial state
    setInterval(() => {
      // Pass in a new state
      // It changes the state and calls render for you (Explicit mutation)
      this.setState({
        date: new Date()
      });
    }, 1000);
  }
  render() {
    const { date } = this.state;
    const currentTime = date.toLocaleString();
    return <h1>The current time is: {currentTime}</h1>;
  }
}

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasData: false
    };
    setTimeout(() => {
      this.setState({
        hasData: true
      });
      // this.state.hasData = true; this does not run the render method
    }, 3000);
  }
  render() {
    if (this.state.hasData) {
      return <h1> Loaded the data successfully </h1>;
    }
    return <h1>Loading...</h1>;
  }
}

ReactDOM.render(
  <ChuckNorris />, // A valid componet (it will run render)
  document.querySelector("#app") // Place to put the html in
);
