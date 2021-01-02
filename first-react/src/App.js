import React, { Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/home';
import Community from './components/community';
import Mypage from './components/mypage';

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
                <Router>
                    <div className='Menu-wrapper'>
                        <ul>
                            <Link to='/'><li>Home</li></Link>
                            <Link to='/community'><li>Community</li></Link>
                            <Link to='/mypage'><li>MyPage</li></Link>
                        </ul>
                    </div>
                    <div className='Contents-wrapper'>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/Community' component={Community} />
                            <Route path='/mypage' component={Mypage} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}
export default App;
