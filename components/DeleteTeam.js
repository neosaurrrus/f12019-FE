import React, { Component } from 'react';
import { graphql, compose} from 'react-apollo'
import {GET_TEAMS_QUERY, DELETE_TEAM_MUTATION} from '../queries/queries'





class DeleteTeam extends Component {

    delete = (event) => {
        let value = event.target.value
        this.props.DELETE_TEAM_MUTATION({
            variables: {
                id: value
            },  
            refetchQueries: [{ query: GET_TEAMS_QUERY }]
        })
    }


    teams() {
        let data = this.props.GET_TEAMS_QUERY
        if (data.loading) {
            return <div> Loading Teams</div>
        } else {
            return data.teams.map(team => {
                return <li key={team.id}> {team.name} - {team.founded}  <button value={team.id} onClick={this.delete}>Delete</button></li>
            })
        } 
    }
    

    render() {
        return (
            <div>
                <ul id="team-list">
                   {this.teams()}
                </ul>
            </div>
        );
    }
}


export default compose(
    graphql(GET_TEAMS_QUERY, { name: "GET_TEAMS_QUERY" }),
    graphql(DELETE_TEAM_MUTATION, { name: "DELETE_TEAM_MUTATION" }),
)(DeleteTeam);