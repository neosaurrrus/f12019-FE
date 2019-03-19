import { gql } from 'apollo-boost'

const GET_TEAMS_QUERY = gql`
    {
        teams{
            name
            id
        }
    }
`
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
export {GET_DRIVERS_QUERY, GET_TEAMS_QUERY, CREATE_DRIVER_MUTATION}