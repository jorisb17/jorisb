import React from 'react';
import "./introduction.styles.scss";
import { Container, Row, Col, Visible } from 'react-grid-system';

const IntroductionComponent = () => {
    return (
        <div className={'introduction'}>
            <Container>
                <Row>
                    <Col lg={12}>
                        bye
                    </Col>
                    <Col lg={12}>
                        hey
                    </Col >
                </Row>
            </Container>
        </div>
    );
};

export default IntroductionComponent;