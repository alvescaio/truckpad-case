import React from 'react';

import { connect } from 'react-redux';

function addUser(user) {
    return {
        type: 'ADD_USER',
        user
    };
}

const Home = ({ users, dispatch }) => (
    <>
    <h3> Users:</h3>
    <ul>
        {
            users.map((user, i) => (
                <li key={i}>
                    {user.name}
                    <button onClick={() => dispatch(addUser(user))}> Add User </button>
                </li>
            ))
        }
    </ul>
    </>
);

export default connect(state => ({ users: state })) (Home);