import React from 'react';
import {Navbar, FormControl,Nav,Button,Form} from 'react-bootstrap';
import styles from './Styles.module.css';


function AmjadNavbar(){
    return (
<Navbar bg="dark" variant="dark" className={styles.container1}>
    <Navbar.Brand href="#home">Amjad</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  );
}

export default AmjadNavbar;