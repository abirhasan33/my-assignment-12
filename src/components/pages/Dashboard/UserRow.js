import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, setUser, refetch}) => {
    const { email, role } = user;


  const handleDelete = id =>{
    const proceed = window.confirm('Are you sure?');
    if(proceed){
        const url = `http://localhost:5000/user/${id}`;
        console.log(url);
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const remaining = user.filter(user => user._id !== id);
            setUser(remaining);
        })
    }
}

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            });
    }
    return (
        <tr>
        <th>1</th>
        <td>{email}</td>
        <td>{role !== "admin" &&  <button onClick={makeAdmin} class="btn btn-sm bg-accent text-white">Make Adimin</button>}</td>
        <td><button onClick={() => handleDelete(user._id)} class="btn btn-sm bg-red-700 text-white">Remove user</button></td>
      </tr>
    );
};

export default UserRow;