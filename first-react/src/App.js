import React, { Component} from 'react';
import './App.css';

class Subject extends Component {
  render() {
    return (
        <header>
          <h1>WEB</h1>
          world wide web!
        </header>
      )

  }
}

class Nv extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="1.html">HTML</a></li>
                    <li><a href="2.html">CSS</a></li>
                    <li><a href="3.html">JAVAsCRIPT</a></li>
                </ul>
            </nav>
        )
    }

}

class App extends Component
{
    render()
    {
        return (
            <div className="App">
                <Subject />
                <Nv />
            </div>
        );
    }
}
export default App;
