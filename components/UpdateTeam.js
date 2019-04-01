import React, { Component } from 'react';
import { graphql, compose} from 'react-apollo'
import { UPDATE_TEAM_MUTATION, GET_TEAMS_QUERY, GET_TEAM_QUERY } from '../queries/queries'

class UpdateTeam extends Component {


    state = {
        name:  null,
        founded:  null,
        teamId: null
    }
   
    
    handleChange = (event) => {
        let { name, value, type} = event.target
        if (type==="number") value = Number(value)
        this.setState({
            [name]: value
        })
    }

    getTeams() { //List all teams as an option to select
        let data = this.props.GET_TEAMS_QUERY;
        if (data.loading) {
            console.log("Loading teams")
        } else {
        return this.props.GET_TEAMS_QUERY.teams.map(team => {
                return (<option name="teamId" key={team.id} value={team.id}>{team.name}</option>)
            })
        }
    }

    setTeam = (event) => { //Populate state which the selected team.
        event.preventDefault();
        let selectedTeam = this.props.GET_TEAMS_QUERY.teams.find(team => {
            return team.id === this.state.teamId
        })
        if (!selectedTeam) return;
        this.setState({
            teamId: selectedTeam.id,
            name: selectedTeam.name,
            founded: selectedTeam.founded
        })
        
    }
    
    updateTeam = (event) => { //Update the DB with the form's entries for the team.
        event.preventDefault();
        this.props.UPDATE_TEAM_MUTATION({
            variables: {
                id: this.state.teamId,
                name: this.state.name,
                founded: this.state.founded
            }, refetchQueries: [{ query: GET_TEAMS_QUERY }]
        })
    }


    render() {
        return (
        <div>
            <form onSubmit={this.setTeam}>
                <div className="field">
                    <label>Team</label>
                    <select onChange={(e) => {
                        this.setState({
                            teamId: e.target.value,
                        })
                    }}>
                        <option name="select" key={"default"} value={"none"}>Select Team</option>
                        {this.getTeams()}
                    </select>
                    <button>Select</button>
                </div>
            </form>
            <form onSubmit={this.updateTeam}>
                <div className="field">
                    <label>Team Name:</label>
                    <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="field">
                    <label>Founded:</label>
                    <input
                        name="founded"
                        type="number"
                        value={this.state.founded}
                        onChange={this.handleChange}
                    />
                </div>
                <button>Update</button>
            </form>
        </div>    
        
        );
    }
}

export default compose(
    graphql(GET_TEAMS_QUERY, { name: "GET_TEAMS_QUERY" }),
    graphql(UPDATE_TEAM_MUTATION, { name: "UPDATE_TEAM_MUTATION" }),
    graphql(GET_TEAM_QUERY, { name: "GET_TEAM_QUERY" })
)(UpdateTeam);