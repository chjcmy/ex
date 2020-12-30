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

    const [newContent, setNewContent] = useState("")

    let handleCreate = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        todoList[name] = value;
        setTodoList(todoList);
    }

    useEffect(() => {
        Axios.get('http://localhost/gogin').then((response) => {
            if (response.data.result != null) {
                setDoList(response.data.result)
            } else {

            }
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

    const deleteList = (id) => {

            Axios.delete(`http://localhost/deleteList/${id}`).then(() => {
                Axios.get('http://localhost/gogin').then((response) => {
                    setDoList(response.data.result)
                });
            });
    }

    const updateList = (id) => {

        Axios.put(`http://localhost/updateList`,  { Id : id, NewContent : newContent }).then(() => {
            Axios.get('http://localhost/gogin').then((response) => {
                setDoList(response.data.result)
                let input = document.getElementById(id + 'update');
                input.value = null;
            });
        });
    }

        return (
            <div className="App">
                <h1>CRUD APPLICATION</h1>
                <div className="form">
                    <label>title</label>
                    <input type="text" name="title" onChange={handleCreate}/>
                    <label>content</label>
                    <input type="text" name="content" onChange={handleCreate}/>

                    <button onClick={submitAddList}>Submit</button>

                    {doList.map((val) => {
                        return (
                            <div className="card" key={val.id}>
                                <h1 key={val.id}>{val.title}</h1>
                                <p>{val.content}</p>

                                <button onClick={() => deleteList(val.id)}>Delete</button>
                                <input type="text" id={val.id + 'update'} onChange={(e)=> {
                                    setNewContent(e.target.value)
                                }}/>
                                <button onClick={() => updateList(val.id, setNewContent)}>update</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    export default App;
