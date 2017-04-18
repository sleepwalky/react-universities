import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import UniversityList from './components/universityList';
import Filters from './components/filters';
import { connect } from 'react-redux';
import { router } from './selectors';
import { createStructuredSelector } from 'reselect';

class App extends Component {
    render() {
        return <Grid>
                <Row className="show-grid">
                    <Col md={8} mdPush={2}>
                        <Filters />
                        <UniversityList />
                    </Col>
                </Row>
            </Grid>
    }
}

const selectors = createStructuredSelector({
    router
})

export default connect(selectors)(App);
