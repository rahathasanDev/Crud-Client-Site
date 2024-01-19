import { Button, Container, Form } from 'react-bootstrap';

const Home = () => {
  const handleAddUser = event =>{
    event.preventDefault();
    const form =event.target;
    const name =form.name.value;
    const email=form.email.value; 
    const user={name,email};
    console.log(user);

  }
  return (
    <div>
     <Container className='w-50'>
     <Form  onSubmit={handleAddUser} className='mt-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Name" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>email</Form.Label>
        <Form.Control type="email" name="email" placeholder="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
     </Container>

    </div>
  );
};

export default Home;