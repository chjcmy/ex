import React, { useReducer, useMemo} from 'react';
import './App.css';
import Hello from "./Hello";
import Counter from "./Counter";
import InputSample from "./InoutSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
}

const initialState = {
    // inputs: {
    //     username: '',
    //     email: ''
    // },
    users: [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ]
};

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            };
        case 'CREATE_USER':
            return {
                inputs: initialState.inputs,
                users: state.users.concat(action.user)
            };
        case 'TOGGLE_USER':
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.id ? { ...user, active: !user.active } : user
                )
            };
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            };
        default:
            return state;
    }
};

// UserDispatch 라는 이름으로 내보내줍니다.
export const UserDispatch = React.createContext(null);

function App() {

    const name = 'react';

    const [state, dispatch] = useReducer(reducer, initialState);
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24, // 기본 단위 px
        padding: '1rem' // 다른 단위 사용 시 문자열로 설정
    }

    const { users } = state;
    //
    // const { username, email } = state.inputs;

    // const [users, setUsers] = useState([
    //     {
    //         id: 1,
    //         username: 'velopert',
    //         email: 'public.velopert@gmail.com',
    //         active: true
    //     },
    //     {
    //         id: 2,
    //         username: 'tester',
    //         email: 'tester@example.com',
    //         active: false
    //     },
    //     {
    //         id: 3,
    //         username: 'liz',
    //         email: 'liz@example.com',
    //         active: false
    //     }
    // ]);
    //


    // const nextId = useRef(4);
    // const onCreate = useCallback(() => {
    //     dispatch({
    //         type: 'CREATE_USER',
    //         user: {
    //             id: nextId.current,
    //             username,
    //             email
    //         }
    //     });
    //     nextId.current += 1;
    // }, [username, email]);

    // const onCreate = useCallback(() => {
    //     const user = {
    //         id: nextId.current,
    //         username,
    //         email
    //     };
    //     setUsers(users.concat(user));
    //
    //     setInputs({
    //         username: '',
    //         email: ''
    //     });
    //     nextId.current += 1;
    // }, [users, username, email]);

    // const onRemove = useCallback(
    //     id => {
    //         setUsers(users.filter(user => user.id !== id));
    //     },
    //     [users]
    // );

    //         id => {
    //     // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    //     // = user.id 가 id 인 것을 제거함
    //     setUsers(users.filter(user => user.id !== id));
    // };

    // const onToggle = useCallback(id => {
    //     dispatch({
    //         type: 'TOGGLE_USER',
    //         id
    //     });
    // }, []);
    //
    // const onRemove = useCallback(id => {
    //     dispatch({
    //         type: 'REMOVE_USER',
    //         id
    //     });
    // }, []);
    //
    // const onChange = useCallback(e => {
    //     const { name, value } = e.target;
    //     dispatch({
    //         type: 'CHANGE_INPUT',
    //         name,
    //         value
    //     });
    // }, []);


    // function countActiveUsers(users) {
    //     console.log('활성 사용자 수를 세는중 ...');
    //     return users.filter(user => user.active).length;
    // }
    // const count = useMemo(() => countActiveUsers(users), [users]);

    const count = useMemo(() => countActiveUsers(users), [users]);


    return (
        <div>
            <Hello
                // 열리는 태그 내부에서는 이렇게 주석을 작성 할 수 있습니다.
            />
            <div style={style}>{name}</div>
            <div className="gray-box"></div>
            <br/>

            <Hello name="react" color="red" isSpecial={true}/>
            <Hello color="pink"/>
            <br/>

            <Counter/>
            <InputSample/>

            <br/>
            <UserDispatch.Provider value={dispatch}>
            <CreateUser/>
            <UserList users={users}/>
                <div>활성사용자 수 : {count}</div>
        </UserDispatch.Provider>
        </div>


    );
}

export default App;
