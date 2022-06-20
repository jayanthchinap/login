import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="app-container">
        <Link className="links" to="/create">
          Create
        </Link>
        <Link className="links" to="/view">
          View
        </Link>
        <Link className="links" to="/delete">
          Delete
        </Link>
      </div>
    );
  }
}

export default Home;
