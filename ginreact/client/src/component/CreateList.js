import React, {useState} from 'react';
import axios from "axios";


function CreateList() {

    let params = new URLSearchParams();

    let [todoList, setTodoList] = useState({
        title: '',
        content: ''
    });

    let handleCreate = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        todoList[name] = value;
        setTodoList(todoList);
    }

    let save = (e) => {
        e.preventDefault();
        console.log(todoList);
        params.append('title', todoList.title);
        params.append('content', todoList.content);
        axios.post('http://localhost:8080/createList', params)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <form method="post" onSubmit={save}>
                title <input type="text" name="title" onChange={handleCreate} />
                content <input type="text" name="content" onChange={handleCreate} />
                <input type="submit" value="Save" />
            </form>
            </div>
    );

}

export default CreateList;