import React, { Component } from 'react';
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

const GET_DRIVERS_QUERY = gql`
    {
        drivers {
            id
            firstName
            lastName
            nationality

        }
    }
`
class DriverList extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <ul id="driver-list">
                   <li>Placeholder drivers</li>
                   
                </ul>
            </div>
        );
    }
}

export default graphql(GET_DRIVERS_QUERY)(DriverList);