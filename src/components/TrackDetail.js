import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import SkillsEarn from './SkillsEarn';

const TrackDetail = (props) => {
    console.log(props)
    return (
        <div>
                   <Container style={{marginTop:'35px'}}>
            <Row>
                <Col style={{marginRight:'30px'}}>
                    <h4>About this Track</h4>
                    <p>{props.about}</p>
                    <SkillsEarn skill= {props.SkillData} />
                </Col>
                {/* <Col lg={4}>
                    <h4>Perks(Kuch aur heading kr lena)</h4>
                </Col> */}
            </Row>
        </Container>
        </div>
    );
};

export default TrackDetail;