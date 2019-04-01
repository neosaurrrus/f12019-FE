import React, { Component } from 'react';
import { graphql, compose} from 'react-apollo'
import { CREATE_TEAM_MUTATION, GET_TEAMS_QUERY } from '../queries/queries'

class AddTeam extends Component {
    state = {
        name:"",
        founded: 0
    }

    handleChange = (event) => {
        let { name, value, type} = event.target
        if (type==="number") value = Number(value)
        this.setState({
            [name]: value
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        this.props.CREATE_TEAM_MUTATION({
            variables: {
                name: this.state.name,
                founded: this.state.founded
            }
            , refetchQueries: [{ query: GET_TEAMS_QUERY }]
        })

    }


    render() {
        return (
        <form onSubmit={this.submitForm}>
            <div className="field">
              <label>Team Name:</label>
              <input
                name="name"
                type="text"
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <label>Founded:</label>
              <input
                name="founded"
                type="number"
                onChange={this.handleChange}
              />
            </div>
            <button>Add</button>
        </form>
        );
    }
}

export default compose(
    graphql(CREATE_TEAM_MUTATION, { name: "CREATE_TEAM_MUTATION" }),
)(AddTeam);