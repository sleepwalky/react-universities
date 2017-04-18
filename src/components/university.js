import React, { Component } from 'react';
import { ListGroupItem, Badge } from 'react-bootstrap';

class University extends Component {
    render() {
        const { name, country, alpha_two_code, domain, web_page } = this.props.university;
        return <ListGroupItem header={name}>
            <p>
                <span>{country} </span>
                <Badge> {alpha_two_code}</Badge>
            </p>
            <p>
                Domain: {domain}
            </p>
            <p><a href={web_page}>{web_page}</a></p>
        </ListGroupItem>;
    }
}

export default University;
