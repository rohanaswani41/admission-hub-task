import CardComponent from "../CardComponent/CardComponent";
import img from "../../images/footbridge.jpeg"
import { Container } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';

export default function ThreeCardComponent(){

    return(

        <>
            <Container>
                <Row>
                    <Col lg={3} sm={3} md={3} xs={3}>
                        <CardComponent image={img} text={"Card text 1"} title={"Title 1"}/>
                    </Col>
                    <Col lg={3} sm={3} md={3} xs={3}>
                        <CardComponent image={img} text={"Card text 2"} title={"Title 1"}/>
                    </Col>
                    <Col lg={3} sm={3} md={3} xs={3}>
                        <CardComponent image={img} text={"Card text 3"} title={"Title 1"}/>  
                    </Col>
                </Row>
            </Container>
        </>
    );
}