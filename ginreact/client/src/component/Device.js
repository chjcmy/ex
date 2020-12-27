import React, { useState, useEffect} from 'react';
import axios from 'axios';



// function User({ user }) {
//     return (
//         <div>
//             <b>{user.title}</b> <span>({user.content})</span>
//         </div>
//     );
// }

function Device() {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setUsers(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                const response = await axios.get(
                    'http://localhost:8080/gogin'
                );
                setUsers(response.data.result); // 데이터는 response.data 안에 들어있습니다.
                console.log("get")
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchUsers();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.title} ({user.content})
                </li>
            ))}
        </ul>
    );
}


//
//             axios.get('http://localhost:8080/gogin')
//             .then(function (response) {
//                 console.log(response);
//                 users = response.data.result
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//
//         console.log("hi");
//
//         return (
//             <div>
//                 {users.map(user => (
//                     <User user={user} key={user.id} />
//                 ))}
//             </div>
//         );
// }

export default Device;
