import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

function UsersComp() {

    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
            setAllUsers(resp.data);
        }
        getUsers();
    }, []);

    return (
        <div style={{ margin: "auto", width: "600px", height: "400px", backgroundColor: "green" }}>
            <h1>Users Page Header</h1>

            {/* Prod ID : <input type="text" onChange={e => setProdID(e.target.value)} /> <br /> */}

            <ul>
                {/* <li><Link to="/product/1"> PC</Link></li>
                <li><Link to="/product/2"> Mobile</Link></li>
                <li><Link to="/product/3"> Tables</Link></li>
                <li><Link to={"/product/" + prodID}> To your product</Link></li> */}
                {allUsers &&
                    allUsers.map( ( item, index ) => {
                        return <li key={ index }> <Link to={"/user/" + item.id}> { item.name } </Link></li>
                    })
                }
            </ul>

            <h1>Users Page Footer</h1>

        </div>
    );
}

export default UsersComp;