import React from 'react';
import './App.css';
import {GoogleOAuthProvider, GoogleLogin} from "@react-oauth/google";
import axios from "axios";

function App() {
    const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    const HOST = process.env.HOST;

    const onFailure = (): void => {
        console.log('failed');
    };

    return (
        <div className="App">
            <main>
                <div>
                    <h2>React Google Login</h2>
                    <br/>
                    <GoogleOAuthProvider
                        clientId={GOOGLE_CLIENT_ID!}
                    >
                        <GoogleLogin
                            onSuccess={async (credentialResponse) => {
                                console.log(credentialResponse);
                                const {data} = await axios.post(
                                    `${HOST}/login`,
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
