import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {gapi} from 'gapi-script';
import {GoogleOAuthProvider, GoogleLogin} from "@react-oauth/google";
import axios from "axios";

function App() {
    const GOOGLE_CLIENT_ID = '932663426648-82mkdignd0jnvhgpbvv8mdiloo40h6rr.apps.googleusercontent.com';
    alert(GOOGLE_CLIENT_ID);
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: process.env.GOOGLE_CLIENT_ID,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onFailure = (): void => {
        console.log('failed');
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <main>
                <div>
                    <h2>React Google Login</h2>
                    <br/>
                    <br/>
                    <GoogleOAuthProvider
                        clientId={GOOGLE_CLIENT_ID!}
                    >
                        <GoogleLogin
                            onSuccess={async (credentialResponse) => {
                                console.log(credentialResponse);
                                const {data} = await axios.post(
                                    "http://localhost:4000/google/redirect",
                                    {
                                        token: credentialResponse.credential,
                                    }
                                );
                                localStorage.setItem("AuthData", JSON.stringify(data));
                                alert('success');
                            }}
                            onError={onFailure}
                        />
                    </GoogleOAuthProvider>
                </div>
            </main>
        </div>
    );
}

export default App;
