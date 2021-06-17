import React, {useState} from 'react';
import {Container, Row, Col, Table} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserInterface from './interfaces/User'
import UserRow from "./components/UserRow";


const App = () => {
    const [users,setUsers] = useState<UserInterface[]>([{
        Id:1,
        FirstName:'FirstName',
        LastName:"LastName",
        Username:"UserName",
    }])
    const UpdateUser =(user:UserInterface) => {
setUsers(users.map((curentuser) => {
    return user.Id===curentuser.Id?user:curentuser;

    }
  ))
        console.log(users)
    }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col><Table striped bordered hover>
              <thead>
              <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                  <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              {
                  users.length === 0?'no user':users.map((user)=>
                      <UserRow UpdateUser={UpdateUser} {...user} />
                  )
              }

              </tbody>
          </Table></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
