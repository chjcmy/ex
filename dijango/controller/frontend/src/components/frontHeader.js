import React, {useState, useEffect} from 'react';
import Axios from 'axios'


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
                            hellow
                            </figure>
                    </a>
                </h1>
                <nav className="header-nav">
                    <ul className="main-nav">
                        </ul>
                </nav>
            </header>
    )
}

export default FrontHeader;
