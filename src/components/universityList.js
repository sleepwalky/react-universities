import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import UniversityComponent from './university';
import { loadList } from '../actions/universitiesActions';
import { connect } from 'react-redux';
import { universities } from '../selectors';
import { createStructuredSelector } from 'reselect';


class UniversityList extends Component {
    componentWillMount() {
        loadList(this.props.dispatch);
    }
    render() {
        const { universities } = this.props;
        return <ListGroup>
            {universities.map((u, i) => {
                return <UniversityComponent key={i} university={u}/>
            })}
        </ListGroup>;
    }
}

const selectors = createStructuredSelector({
    universities,
});

export default connect(selectors)(UniversityList);


