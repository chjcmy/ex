import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import {Link} from 'react-router-dom';
import '../App.css';
import logo from '../image/man.jpg'




function FrontHeader() {

    const [doList, setDoList] = useState([])

    useEffect(() => {
        Axios.get('http://localhost/api/front/title').then((response) => {
            if (response.data.result != null) {
                setDoList(response.data.result)
            }
    })

    }, []);

    return (
            <header className="page-header wrapper">
                <h1>
                    <a href="/">
                        <figure>
                            <img className="logo" src={logo} alt="나만의 홈 페이지" />
                        </figure>
                    </a>
                </h1>
                <nav className="header-nav">
                    <ul className="main-nav">
                        {doList.map((val) => {
                            return (<li key={val.targetPath}><Link to={"/find" + val.targetPath}>{val.targetName}</Link></li>
                            );
                        })}
                        </ul>
                </nav>
            </header>
    )
}

export default FrontHeader;
