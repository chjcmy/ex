import React, {useEffect, useState} from 'react';
import Axios from "axios";
import "../App.css"
import {Link} from "react-router-dom";
import gopher from "../image/gopher.gif"
import javascript from "../image/javascript.gif"
import database from "../image/database.gif"
import html from "../image/html.gif"
import server from "../image/server.gif"

const Home = () => {

    const [doList, setDoList] = useState([])

    useEffect(() => {
        Axios.get('http://localhost/api/front/title').then((response) => {
            if (response.data.result != null) {
                setDoList(response.data.result)
            }
        })

    }, []);

    return (
        <div className="container">
            <nav>
                <ul className="home-nav">
                    {doList.map((val) => {
                        if (val.targetName === "GOLANG") {
                            return (<li key={val.targetPath}><Link to={"/find" + val.targetPath}><img
                                className="gif-contain" src={gopher} alt="profile"/></Link></li>)
                        } else if (val.targetName === "JavaScript") {
                            return (<li key={val.targetPath}><Link to={"/find" + val.targetPath}><img
                                className="gif-contain" src={javascript} alt="profile"/></Link></li>)
                        } else if (val.targetName === "DataBase") {
                            return (<li key={val.targetPath}><Link to={"/find" + val.targetPath}><img
                                className="gif-contain" src={database} alt="profile"/></Link></li>)
                        } else if (val.targetName === "HTML&CSS") {
                            return (<li key={val.targetPath}><Link to={"/find" + val.targetPath}>
                                <img className="gif-contain" src={html} alt="profile"/></Link></li>);
                        } else {
                            return (<li key={val.targetPath}><Link to={"/find" + val.targetPath}>
                                <img className="gif-contain" src={server} alt="profile"/></Link></li>);
                        }
                    })
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Home;
