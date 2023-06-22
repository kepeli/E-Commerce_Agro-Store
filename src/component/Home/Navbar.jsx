import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { useRef } from 'react';
import { BsCart4 } from "react-icons/bs";
import { SlUser } from "react-icons/sl";
import { TfiHelpAlt } from "react-icons/tfi";

export default function Navigationbar({product}) {

    // console.log(product);

    const [count, setCount] = useState(0);
    


    return (
        <>
            <section className="firstHeader">
                <div className="headerDetails container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                        <div className="col"><span>+234 812 670 6834</span></div>
                        <div className="col"><span>kepelienteprise@kepeli.com</span></div>
                        <div className="col"><span>3-5 Business days delivery &amp; Free Returns</span></div>
                    </div>
                </div>
            </section>
            <section>
                <Navbar bg="light" expand="lg">
                    <Container fluid className='container'>
                        <Navbar.Brand className='logo' href="#" style={{color:"#29bc1e", fontSize:"35px"}}>KEPELI</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">

                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-1"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>

                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                
                                <NavDropdown icon="SlUser" title={<span><SlUser /> Account</span>} id="navbarScrollingDropdown" >
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title={<span><TfiHelpAlt /> Help</span>} id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#action2"><BsCart4 /> Cart{setCount(count + 1)}</Nav.Link>
                                
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section>


        </>




    )
}