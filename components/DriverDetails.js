import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {GET_DRIVER_QUERY} from '../queries/queries';


class DriverDetails extends Component {

    displayDriverDetails= () => {
        const { driver } = this.props.data;
        if (driver) {
            const filteredDrivers = driver.team.drivers.map(d => {
                if(driver.id!==d.id) return <li key={d.id}>{d.firstName} {d.lastName}</li>
            })
    
            return (
                <div>
                    <h3>{driver.firstName} {driver.lastName}</h3>
                    <h4>Nationality: {driver.nationality}</h4>
                    <h4>Team: {driver.team.name}</h4>
                    <b>Other Teammates:</b>
                    <p>{filteredDrivers}</p>

                </div>
            );
            } else {return <p>No driver selected</p>};
    };
    render(){
        return (
            <div>
                {this.displayDriverDetails()}
            </div>
        )
    }  
};

export default graphql(GET_DRIVER_QUERY, {
    options: (props) => {
        return {
            variables: {
                id: props.driverId
            }
        }
    }
})(DriverDetails);