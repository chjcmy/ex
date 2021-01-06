import React, {useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const From = () => {

    const [data, setData] = useState({idios:'', here:''});
    function handlePick() {
        console.log(data);
    }

    return (
        <div className="App">
            <h2>Using CKEditor 5 build in React</h2>

            <input type="text" onChange={e=>setData({...data,here:e.target.value})}/>
            <CKEditor
                editor={ ClassicEditor }
                data=""
                onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('', editor );
                } }
                onChange={ ( event, editor ) => {
                    setData({...data,idos:editor.getData()});
                    console.log( { event, editor, data } );
                } }
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                } }
            />
            <button onClick={handlePick}>submit</button>
        </div>
    );


}

export default From