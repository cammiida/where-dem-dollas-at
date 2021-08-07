import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router } from 'react-router-dom';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Auth0Provider } from '@auth0/auth0-react';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
            domain="cmdalan.eu.auth0.com"
            clientId="8njAIubj3X4ScoAX3EktWM0v5Yq2xS9I"
            redirectUri={window.location.origin}
        >
            <Router>
                <ApolloProvider client={client}>
                    <App />
                </ApolloProvider>
            </Router>
        </Auth0Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
