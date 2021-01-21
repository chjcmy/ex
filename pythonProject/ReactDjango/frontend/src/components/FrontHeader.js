import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import '../../static/css/App.css'
import {Link} from 'react-router-dom';
import {Img} from 'react-image'

function FrontHeader() {

    const [doList, setDoList] = useState([])

    useEffect(() => {
                Axios.get('http://localhost:8000/api/ContentType_read_post_all').then((response) => {
            if (response.data != null) {
                setDoList(response.data)
            }
        })
    }, []);

    return (
        <header className="page-header wrapper">
            <h1>
                <a href="/">
                    <figure>
                        <div><Img src='../../static/images/go.gif'/></div>
                    </figure>
                </a>
            </h1>
            <nav className="header-nav">
                    <ul className="main-nav">
                        {doList.map((val) => {
                            return (
                                <li key={val.fields.subject}><Link to={"/find" + val.fields.url}>{val.fields.subject}</Link></li>
                            );
                        })}
                    </ul>
            </nav>
        </header>
    )
}

export default FrontHeader;
