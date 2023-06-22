import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function Header(){



    return(
        <>
        <Container fluid className='discountBorder'>
              <Row>
                <Spinner animation="grow" variant="white" />
                
                <Col><h2 style={{ color: "white", fontSize: "30px" }} >Today's Deals</h2></Col>
              </Row>
            </Container>
        </>
    )
}