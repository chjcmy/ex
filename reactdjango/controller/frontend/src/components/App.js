import React from 'react';
import { render } from 'react-dom';
import FrontHeader from './component/frontHeader'
import '../../static/css/App.css';
import findTitle from './component/findTitle';
import { Switch ,Route } from 'react-router-dom';
import Home from "./component/Home"

function App() {
    return (
        <div className="App">
            <FrontHeader/>
            <div className="news-contents wrapper">
                <aside>

                </aside>
                <article>
                        <Route exact path="/" component={Home}/>
                        <Route path="/find" exact render={() => <div>유저를 선택해주세요.</div>}/>
                        <Route path="/find/:name" component={findTitle}/>
                </article>
            </div>
        </div>
    );
}

export default App;
