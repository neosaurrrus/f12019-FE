import React, { Component } from 'react';
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

const GET_TEAMS_QUERY = gql`
  {
    teams {
      name
      founded
    }
  }
`;

class TeamList extends Component {

    teams(){
        let data = this.props.data
        if(data.loading){
            return <div> Loading Teams</div>
        } else {
            return data.teams.map(team => {
                return <li key={team.id}> {team.name} - {team.founded}</li>
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

export default graphql(GET_TEAMS_QUERY)(TeamList);