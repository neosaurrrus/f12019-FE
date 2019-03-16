import React, { Component } from 'react';
import fetch from 'node-fetch';

import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
//Components
import DriverList from './DriverList';
import TeamList from './TeamList';


//Apollo Client Set up
const client = new ApolloClient({
        uri: "http://localhost:5000/graphQL",
        fetch: fetch
})


class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <div id="App">
                    <h2>Drivers</h2>
                    <DriverList/>
                    <h2>Teams</h2>
                    <TeamList/>
                </div>
            </ApolloProvider>

        );
    }
}

export default App;