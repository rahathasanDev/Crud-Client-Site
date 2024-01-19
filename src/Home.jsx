import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch('http://localhost:5000/users',{
      method: "POST",
       headers: {
      "Content-Type": "application/json"},
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId){
          alert('Users added succesfully ')
          form.reset();

        }
      })

  }
  return (
    <div>
      <Container className='w-50'>
        <Form onSubmit={handleAddUser} className='mt-5'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" required placeholder="Enter Name" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>email</Form.Label>
            <Form.Control type="email" name="email"  required placeholder="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <div className='text-center'>
       
        <Link to='/users'> <h1>Go To Users</h1></Link>
      </div>

    </div>
    
  );
};

export default Home;