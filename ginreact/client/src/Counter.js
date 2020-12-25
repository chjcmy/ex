import React, {useReducer} from 'react';
import axios from "axios";

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function Counter () {

    const [number, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => {
        let form = new FormData()

        let firstname = 'HeLlOw'
        let lastname = 'bye'
        form.append('firstname', firstname)
        form.append('lastname',lastname)


        axios.post('http://localhost:8080/gogin', form )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    const onDecrease = () => {
        dispatch({ type: 'DECREMENT' });
    };
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default React.memo(Counter);