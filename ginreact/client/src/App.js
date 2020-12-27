import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';


function App() {

    let params = new URLSearchParams();

    let [todoList, setTodoList] = useState({
        title: '',
        content: ''
    });
    const [doList, setDoList] = useState([])

    let handleCreate = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        todoList[name] = value;
        setTodoList(todoList);
    }

    useEffect(() => {
        Axios.get('http://localhost/gogin').then((response) => {
            setDoList(response.data.result)
        });
    }, []);


    const submitAddList = () => {
        params.append("title", todoList.title)
        params.append("content", todoList.content)
        Axios.post('http://localhost/createList',
            params
        ).then(() => {
            Axios.get('http://localhost/gogin').then((response) => {
                setDoList(response.data.result)
            });
        });
    };

    return (
        <div>
            <h1>CRUD APPLICATION</h1>
            <div className="form">
                <label>title</label>
                <input type="text" name="title" onChange={handleCreate}/>
                <label>content</label>
                <input type="text" name="content" onChange={handleCreate}/>

                <button onClick={submitAddList}>Submit</button>

                    {doList.map((val) => {
                        return <h1 key={val.id}>title: {val.title} | content: {val.content}</h1>
                        })}


            </div>
        </div>
    );

}

export default App;
// {/*<h1>todolist</h1>*/}
// {/*<ShowTodoList/>*/}