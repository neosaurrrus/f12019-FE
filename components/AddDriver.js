import React, { Component } from 'react';
import {graphql, compose} from 'react-apollo'
import {CREATE_DRIVER_MUTATION, GET_DRIVERS_QUERY, GET_TEAMS_QUERY} from '../queries/queries'



class AddDriver extends Component {

    state = {
        firstName: '',
        lastName: '',
        nationality:'',
        teamId:'none'
    }

    showTeams(){
        let data = this.props.GET_TEAMS_QUERY
        if(data.loading){
            return (<option disabled>Loading Teams...</option>)
        } else {
            return data.teams.map(team => {
                return (<option name="teamId" key={team.id} value={team.id}>{team.name}</option>)
            })
        }
    }

    handleChange = ((event) =>{
        const{name, value} = event.target
        this.setState({[name]: value})
    });

    submitForm = (event) =>{
        event.preventDefault();
        if (this.state.teamId === "none") return
        this.props.CREATE_DRIVER_MUTATION({
            variables:{
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                nationality: this.state.nationality,
                teamId: this.state.teamId
            },
            refetchQueries: [{query: GET_DRIVERS_QUERY}]
        })  
    }


    render() {
        return (
          <form id="add-driver"onSubmit= {this.submitForm}>
            <div className="field">
              <label>First Name:</label>
                <input type="text" name="firstName" onChange={this.handleChange}/>
            </div>
            <div className="field">
                <label>Last Name:</label>
                    <input name="lastName" type="text" onChange={this.handleChange}/>
            </div>
            <div className="field">
                <label>Nationality:</label>
                    <input name="nationality" type="text" onChange={this.handleChange}/>
            </div>
            <div className="field">
                <label>Team</label>
                    <select defaultValue="Select a Team" onChange={ (e) => {this.setState({teamId:e.target.value})}}>
                        <option name="teamId" key={"select"} value={"Select a Team"}>Select a team</option>
                        {this.showTeams()}
                  </select>
            </div>
            <button>Add</button>
          </form>
        );
    }
}

export default compose(
    graphql(GET_TEAMS_QUERY, {name:"GET_TEAMS_QUERY"}),
    graphql(CREATE_DRIVER_MUTATION, {name:"CREATE_DRIVER_MUTATION"}),
)(AddDriver);