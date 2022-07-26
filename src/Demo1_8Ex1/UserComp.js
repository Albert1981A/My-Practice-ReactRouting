import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function UserComp() {

    const param = useParams();
    const [theUser, setTheUser] = useState({});

    useEffect(() => {
        async function getUser() {
            const resp = await axios.get("https://jsonplaceholder.typicode.com/users/" + param.id);
            setTheUser(resp.data)
        }
        getUser();
    }, [])

    return (
        <div style={{ margin: "auto", width: "600px", height: "400px", backgroundColor: "Yellow" }}>

            <h1>User Page Header</h1>

            {theUser.address && <div>

                <span>ID: </span> <span> {param.id} </span> <br />
                <span>Name: </span> <span> {theUser.name} </span> <br />
                <span>Email: </span> <span> {theUser.email} </span> <br />
                <span>Address City: </span> <span> {theUser.address.city} </span> <br />
                <span>Address Street: </span> <span> {theUser.address.street} </span> <br />

            </div>}

            <h1>User Page Footer</h1>

        </div>
    );
}

export default UserComp;