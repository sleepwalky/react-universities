import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, Col, FormControl, Button } from 'react-bootstrap';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

class Filters extends Component {
    search = () => {
        this.props.dispatch(push('/search?country=HARDCODED'));
    }
    render() {
        return <Form horizontal>
            <FormGroup controlId="formHorizontalCountry">
                <Col componentClass={ControlLabel} sm={2}>
                    Country
                </Col>
                <Col sm={10}>
                    <FormControl type="text" placeholder="Country" />
                </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalName">
                <Col componentClass={ControlLabel} sm={2}>
                    Name
                </Col>
                <Col sm={10}>
                    <FormControl type="text" placeholder="Name" />
                </Col>
            </FormGroup>

            <FormGroup>
                <Col smOffset={2} sm={10}>
                    <Button type="submit" onClick={this.search}>
                        Filter
                    </Button>
                </Col>
            </FormGroup>
        </Form>
    }
}

export default connect()(Filters);
