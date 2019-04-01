import { gql } from 'apollo-boost'

const GET_TEAMS_QUERY = gql`
    {
        teams{
            name
            founded
            id
        }
    }
`


const GET_TEAM_QUERY = gql`
    query($id: ID) {
        team(id:$id){
            id
            name
            founded
        }
    }
`;

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

const GET_DRIVER_QUERY = gql`
    query($id: ID){
        driver(id:$id) {
            id
            firstName
            lastName
            nationality
            team{
                name
                drivers{
                    id
                    firstName
                    lastName
                }
            }

        }
    }
`

const CREATE_DRIVER_MUTATION = gql`
    mutation($firstName: String!, $lastName: String!, $nationality:String!, $teamId:ID!) {
        addDriver(firstName: $firstName, lastName: $lastName, nationality: $nationality, teamId:$teamId) {
            firstName
            lastName
            nationality
            team{
                name
            }
        }
    }
`

const CREATE_TEAM_MUTATION = gql`
  mutation($name: String!, $founded: Int!) {
    addTeam(name: $name, founded: $founded) 
    {
      name
      founded
    }
  }
`
const DELETE_DRIVER_MUTATION = gql`
  mutation($id: ID!) {
    deleteDriver(
      id:$id
    ){
        id
        firstName
        lastName
        nationality
    }
  }
`;

const DELETE_TEAM_MUTATION = gql`
  mutation($id: ID!) {
    deleteTeam(id: $id) {
      id
      name
    }
  }
`;

const UPDATE_TEAM_MUTATION = gql`
    mutation($id:ID!, $name:String!, $founded: Int!){
        updateTeam(id: $id, name:$name, founded:$founded){
            name
            founded
        }
    }
`;

export {GET_DRIVERS_QUERY, 
        GET_TEAMS_QUERY, 
        GET_TEAM_QUERY,
        GET_DRIVER_QUERY, 
        CREATE_DRIVER_MUTATION,
        CREATE_TEAM_MUTATION,
        DELETE_DRIVER_MUTATION,
        DELETE_TEAM_MUTATION,
        UPDATE_TEAM_MUTATION
    }