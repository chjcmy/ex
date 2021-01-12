import React, {useEffect, useState} from 'react';
import '../../App.css'
import Axios from "axios";

const About = ({match}) => {

    const [doList, setDoList] = useState([])

    console.log(match.params.name);

    useEffect(() => {
        Axios.get('http://localhost/api/front/title').then((response) => {
            if (response.data.result != null) {
                setDoList(response.data.result)
            }
        })
    }, []);

    console.log(match.params.name);
    return (
        <div>
            <div className="home-find">
                <h1>{match.params.name}</h1>
                <div className="home-menu">
                    <select name="pets" id="pet-select">
                        <option value="">전체</option>
                        {doList.map((val) => {
                            return (
                                <option value={val.targetName}>{val.targetName}</option>
                            )
                        }
                        )}
                    </select>
                    <input type="text"/>
                    <button/>
                </div>
            </div>
        </div>
    );
};

export default About;
