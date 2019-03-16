import React, { Component } from 'react';
import { gql } from 'apollo-boost'
import { graphql} from 'react-apollo'

const GET_DRIVERS_QUERY = gql`
    {
        drivers {
            id
            firstName
            lastName
            nationality
            team{
                name
            }

        }
    }
`
class DriverList extends Component {

    drivers() {
        let data = this.props.data
        if (data.loading) {
            return <div> Fetching Drivers</div>
        } else {
            return data.drivers.map(driver => {
                return <li key={driver.id}> {driver.firstName} {driver.lastName} - {driver.nationality} - {driver.team.name}</li>
            })
        }
    }

    render() {

        return (
            <div>
                <ul id="driver-list">
                   {this.drivers()}
                </ul>
            </div>
        );
    }
}

export default graphql(GET_DRIVERS_QUERY)(DriverList);