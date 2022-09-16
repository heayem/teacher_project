
import './Homescreen.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const Homescreen=()=>{

    return(
        <div>
            <Container fluid="sm">
                <Row>
                    <Col sm> <h2>Brand name </h2> </Col>
                </Row>
                <hr/>
                <Row>
                    <Col  className='Box bg-light'> 
                    <h3>Title 1</h3>
                    <p>Sub title</p>
                    <div >
                        <div className='text'><h6> Text1 </h6> <h6>1000</h6></div>
                        <hr/>
                        <div className='text'><h6> Text1 </h6> <h6>1000</h6></div>
                    </div>
                    

                    </Col>
                    <Col className='Box col-xl-4 col-sm-12 col-x-small-12 bg-light'> 
                    <h3>Title 2</h3>
                    <p>Sub title</p>
                    <div >
                        <div className='text'><h6> Text2 </h6> <h6>1000</h6></div>
                        <hr/>
                        <div className='text '><h6> Text2 </h6> <h6>1000</h6></div>
                    </div>

                    </Col>
                    <Col className='Box col-xl-4 col-sm-12 col-x-small-12 bg-light'> 
                    <h3>Title 3</h3>
                    <p>Sub title</p>
                    <div >
                        <div className='text'><h6> Text3 </h6> <h6>1000</h6></div>
                        <hr/>
                        <div className='text'><h6> Text3 </h6> <h6>1000</h6></div>
                    </div>

                    </Col>
                </Row>


            </Container>

            





        </div>
    )
}
export default Homescreen;