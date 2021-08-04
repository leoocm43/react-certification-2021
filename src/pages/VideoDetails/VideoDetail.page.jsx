import React from 'react'
import {Row, Col, Container } from 'react-bootstrap';

const VideoDetail = () => {
    return (

        <Container>
            <Row>
            <Row xs={1} md={2}>
                <Col sm={10}>Video</Col>
                <Col sm={2}>Suggestions</Col>
                <Col>Details</Col>
            </Row>
            </Row>
        </Container>
    )
}

export default VideoDetail
