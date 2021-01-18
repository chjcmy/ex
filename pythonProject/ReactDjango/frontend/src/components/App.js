import React from "react";
import '../../static/css/App.css'
import HomePage from "./HomePage";
import FrontHeader from "./FrontHeader";
import {Route} from "react-router-dom";
import FindTitle from "./FindTitle";

function App() {
    return (
         <div className="app">
            <FrontHeader/>
            <div className="news-contents wrapper">
                <aside>

                </aside>
                <article>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/find" exact render={() => <div>유저를 선택해주세요.</div>}/>
                        <Route path="/find/:name" component={FindTitle}/>
                </article>
            </div>
        </div>
    );
}

export default App;
