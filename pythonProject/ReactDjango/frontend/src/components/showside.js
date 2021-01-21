import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import '../../static/css/App.css'
import {Link} from 'react-router-dom';



function SHOWSIDE() {

    const [doList, setDoList] = useState([])


    useEffect(() => {
            Axios.get('http://localhost:8000/api/newpost').then((response) => {
                if (response.data != null) {
                    console.log(response.data)
                    setDoList(response.data)
                }
            })
        }, []);

     const sidepick = () => {
         useEffect(() => {
             Axios.get('http://localhost:8000/api/newpost').then((response) => {
                 if (response.data != null) {
                     console.log(response.data)
                     setDoList(response.data)
                 }
             })
         }, []);
     }

    return (
        <div>
            <nav className="side-nav">
                <h2>최신글</h2>
                <ul className="main-nav">
                    {doList.map((val) => {
                        return (
                            <li key={val.fields.subject}><Link to={"/read/id=" + val.pk}
                                                               length='10'>{val.fields.title}</Link></li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default SHOWSIDE;
