import React from 'react';
import axios from "axios";

let i = 1;


function going() {

    if (i === 1) {
        let form = new FormData()
        let firstname = 'HeLlOw'
        let lastname = 'bye'
        form.append('firstname', firstname)
        form.append('lastname', lastname)

        axios.post('http://localhost/gogin', form)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    ;

    i++
    return (
        <>
            <div>
            </div>
        </>
    )


};


export default going;