import React, { Component } from 'react';
import {graphql} from 'react-apollo'
import DriverDetails from './DriverDetails'
import {GET_DRIVERS_QUERY} from '../queries/queries'

class DriverList extends Component {
    
    state = { };

    drivers() {
        let data = this.props.data
        if (data.loading) {
            return <div> Fetching Drivers</div>
        } else {
            return data.drivers.map(driver => {
                return <li key={driver.id} onClick={(event)=>{
                    this.setState({selected: driver.id})
                }}> {driver.firstName} {driver.lastName} - {driver.nationality} </li>
            })
        }
    }
    render() {
        return (
            <div>
                <ul id="driver-list">
                   {this.drivers()}
                </ul>
                <DriverDetails driverId={this.state.selected}/>
            </div>
        );
    }
}

export default graphql(GET_DRIVERS_QUERY)(DriverList);