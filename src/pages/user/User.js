import React, { Component } from 'react';

import './styles.css';
import UserForm from './UserForm';

class User extends Component {
    render() {
        let list = [
            {
                name: "Alvaro",
                email: "alvaro@gmail.com"
            },
            {
                name: "Joao",
                email: "joao@gmail.com"
            },
            {
                name: "Maria",
                email: "maria@hotmail.com"
            }
        ]

        return(
            <div>
                <UserForm></UserForm>
                <table id="user-table">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                    {list.map(item => {
                        return(
                            <tr>
                                <td>
                                   {item.name} 
                                </td>
                                <td>
                                    {item.email}
                                </td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        );
    }
}

export default User;
