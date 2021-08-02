import axios from 'axios';
import { useEffect, useState } from "react";
import Main from '../components/Main/Main';


function Users() {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3002/users").then((response) => {
            console.log(response.data)
            setListOfUsers(response.data);
        }).catch((error) => console.log(error));
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