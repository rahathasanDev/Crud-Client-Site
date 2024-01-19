import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users,setUsers]=useState(loadedUsers)
  const handleDelete = _id => {
    console.log('delete', _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: 'DELETE',

    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const remainig = users.filter(user=> user._id !== _id);
        setUsers(remainig);
      })

  }
  return (
    <Container className='text-center'>
      <h2>{users.length}</h2>
      <div>
        {
          users.map(user => <h3 key={user._id}>{user.name} : {user.email}  -
            <Button onClick={() => handleDelete(user._id)} variant="danger">Delete</Button>
          </h3>)
        }
      </div>
      <div>
        <Link to='/'><h2>Back to Home</h2></Link>
      </div>
    </Container >
    
  );
};

export default Users;