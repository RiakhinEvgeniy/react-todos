import { useContext } from 'react';
import UserContext from '../components/context/UserContext';

function UserInfo() {
    const user = useContext(UserContext)
    return (
        <h1>{user}</h1>
    )
}

export default UserInfo