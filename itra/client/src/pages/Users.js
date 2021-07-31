import axios from 'axios';
import { useEffect, useState } from "react";
import Main from '../components/Main/Main';


function Users() {

    const [listOfUsers, setListOfUsers] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/users").then((response) => {
            setListOfUsers(response.data);
        });
    }, [])

    return (
        <>
            <div>
                <Main data={listOfUsers} />
            </div>
        </>
    );
}

export default Users;