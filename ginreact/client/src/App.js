import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import From from "./component/ckeditor";


function App() {

    let params = new URLSearchParams();

    const [img, setImage] = useState(null);


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
        Axios.get('http://localhost/getList').then((response) => {
            if (response.data.result != null) {
                setDoList(response.data.result)
            } else {

            }
        });

    }, []);


    const getList = () => {
        Axios.get('http://localhost/getList').then((response) => {
            if (response.data.result != null) {
                setDoList(response.data.result)
            } else {

            }
        });
    }

    const submitAddList = () => {
        params.append("title", todoList.title)
        params.append("content", todoList.content)
        Axios.post('http://localhost/createList',
            params
        ).then(() => {
            getList();
        });
    };

    const deleteList = (id) => {

        Axios.delete(`http://localhost/deleteList/${id}`).then(() => {
            getList();
        });
    }


    const onUpload = (e) => {
        setImage(e.target.files[0]);
    }


    const onClick = async () => {
        const formData = new FormData();
        formData.append('file', img);
        // 서버의 upload API 호출
        const res = await Axios.post("/api/upload", formData);
        console.log(res);
    }

    const updateList = (id) => {

        Axios.put(`http://localhost/updateList`, {Id: id, NewContent: newContent}).then(() => {
            getList();
            let input = document.getElementById(id + 'update');
            input.value = null;
        });
    }

    // const FrontEditor = (props) => {
    //
    //     function showController(name, controllers){
    //         console.log(name, controllers)
    //     }
    //
    //     const addhtml = () => {
    //
    //     }
    //
    //     return (
    //         <div>
    //             <p> My Other Contents </p>
    //             <SunEditor />
    //             <button onClick={addhtml}>submit</button>
    //         </div>
    //     );
    // };

    const handlePick = (data) => {

    }


    return (
        <div className="App">

            <h1>CRUD APPLICATION</h1>
            <From name="Hello"/>

            <p/>
            <div className="form" >

                <p/>
                <label>title</label>
                <input type="text" name="title" onChange={handleCreate}/>
                <label>content</label>
                <input type="text" name="content" onChange={handleCreate}/>

                <button onClick={submitAddList}>submit</button>

                <input type="file" onChange={onUpload}/>
                <button onClick={onClick}>제출</button>

                {doList.map((val) => {
                    return (
                        <div className="card" key={val.id}>
                            <h1 key={val.id}>{val.title}</h1>
                            <p>{val.content}</p>

                            <button onClick={() => deleteList(val.id)}>Delete</button>
                            <input type="text" id={val.id + 'update'} onChange={(e) => {
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
