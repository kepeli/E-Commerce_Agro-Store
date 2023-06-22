import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import itemProducts from './Data';


export default function Cards(props) {

  console.log(props);

    // function handleClick(e) {
      // let productID = e.target.id;

      // console.log(itemProducts[productID])

      // setProduct(props.itemProduct[productID])

    // }


  return (
    <>
      <div className='bodyBorder'>
        <div className='itemBodyBorder'>
          <div>
        
            <div className='itemDisplay'>
              <div className='object'>
              <Row xs={2} md={6} className="g-2">
                      <Col>
                        <Card>
                          <Card.Img variant="top" src={props.image} />
                          <Card.Body>
                            <Card.Title><h3 className='itemName'>{props.itemName}</h3></Card.Title>
                            <hr className='borderLine' />
                            <Card.Text>
                              <span className='itemDiscountPrice'>{props.itemDiscountPrice}</span>
                              <span className='itemPrice'>{props.itemPrice}</span>
                            </Card.Text>
                            <p className='soldBy'>Sold by <span className='sellar'>KEPELI'S ENTERPRISE</span></p>
                            <div className=" button">
                              <Button size="" style={{ backgroundColor: "#29bc1e", border: "0", width: "100%" }}>
                                Add To Cart
                              </Button>{' '}
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
              </Row>
              </div>
              
            </div>

          </div>

        </div>

      </div>

    </>

  )



}