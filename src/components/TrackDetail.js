import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import SkillsEarn from './SkillsEarn';

const TrackDetail = (props) => {
    return (
        <div>
                   <Container style={{marginTop:'35px'}}>
            <Row>
                <Col style={{marginRight:'30px'}}>
                    <h4>About this Course</h4>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ame</p>
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