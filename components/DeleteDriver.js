import React, { Component } from 'react';
import { graphql, compose} from 'react-apollo'
import {GET_DRIVERS_QUERY, DELETE_DRIVER_MUTATION} from '../queries/queries'


class DeleteDriver extends Component {



    delete = (event) => {
        let value = event.target.value
        this.props.DELETE_DRIVER_MUTATION({
            variables: {
                id: value
            },  
            refetchQueries: [{ query: GET_DRIVERS_QUERY }]
        })
    }


    drivers() {
        let data = this.props.GET_DRIVERS_QUERY
        if (data.loading) {
            return <div>Fetching Drivers</div>
        } else {
            return data.drivers.map(driver => {
                return <li key={driver.id}> {driver.firstName} {driver.lastName} - {driver.nationality} <button value={driver.id} onClick={this.delete}>Delete</button></li> 
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


export default compose(
    graphql(GET_DRIVERS_QUERY, { name: "GET_DRIVERS_QUERY" }),
    graphql(DELETE_DRIVER_MUTATION, { name: "DELETE_DRIVER_MUTATION" }),
)(DeleteDriver);