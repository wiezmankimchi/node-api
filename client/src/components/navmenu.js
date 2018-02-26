import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Navmenu extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    fetch("/api/people")
      .then(results => results.json())
      .then(people => {
        this.setState({ people });
      });
  }

  render() {
    const { people } = this.state;
    console.log({ people });
    return (
      <Router>
        <ul className="list-group">
          {people ? (
            people.map(person => (
              <Link
                to={"/api/people/:" + person._id}
                key={person._id}
                className={"list-group-item list-group-item-action "}
              >
                {person.name}
              </Link>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </ul>
      </Router>
    );
  }
}

export default Navmenu;
