import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import FrontHeader from "./frontHeader"
// import "../../static/css/App.css"

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <FrontHeader/>
        <div className="news-contents wrapper">
                <aside>

                </aside>
            <article>
                <HomePage />
            </article>
        </div>
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
